import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";

import { MyContext } from "../../App";
import { fetchDataFromApi, postData, deleteData } from "../../utils/api";

import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [formFields, setFormFields] = useState({
    fullName: "",
    country: "",
    streetAddressLine1: "",
    streetAddressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
  });

  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    context.setEnableFilterTab(false);
    const user = JSON.parse(localStorage.getItem("user"));
    fetchDataFromApi(`/api/cart?userId=${user?.userId}`).then((res) => {
      setCartData(res);

      setTotalAmount(
        res.length !== 0 &&
        res
          .map((item) => parseInt(item.price) * item.quantity)
          .reduce((total, value) => total + value, 0)
      );
    });
  }, []);

  const onChangeInput = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const context = useContext(MyContext);
  const history = useNavigate();

  const checkout = (e) => {
    e.preventDefault();

    console.log(cartData);

    console.log(formFields);
    if (formFields.fullName === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Vui lòng nhập họ tên",
      });
      return false;
    }

    if (formFields.country === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Vui lòng nhập quốc gia",
      });
      return false;
    }

    if (formFields.streetAddressLine1 === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Vui lòng điền Địa chỉ đường phố",
      });
      return false;
    }

    if (formFields.streetAddressLine2 === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Vui lòng nhập Địa chỉ cụ thể",
      });
      return false;
    }

    if (formFields.city === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Vui lòng nhập thành phố ",
      });
      return false;
    }

    if (formFields.state === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Vui lòng nhập quận/huyện ",
      });
      return false;
    }

    if (formFields.zipCode === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Vui lòng nhập mã bưu chính",
      });
      return false;
    }

    if (formFields.phoneNumber === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Vui lòng nhập số điện thoại ",
      });
      return false;
    }

    if (formFields.email === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Vui lòng nhập email",
      });
      return false;
    }

    const addressInfo = {
      name: formFields.fullName,
      phoneNumber: formFields.phoneNumber,
      address: formFields.streetAddressLine1 + formFields.streetAddressLine2,
      pincode: formFields.zipCode,
      date: new Date().toLocaleString("vi-VN", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    var options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      key_secret: process.env.REACT_APP_RAZORPAY_KEY_SECRET,
      amount: parseInt(totalAmount * 100),
      currency: "VND",
      order_receipt: "order_rcptid_" + formFields.fullName,
      name: "E-Bharat",
      description: "for testing purpose",
      handler: function (response) {
        console.log(response);

        const paymentId = response.razorpay_payment_id;

        const user = JSON.parse(localStorage.getItem("user"));

        const payLoad = {
          name: addressInfo.name,
          phoneNumber: formFields.phoneNumber,
          address: addressInfo.address,
          pincode: addressInfo.pincode,
          amount: parseInt(totalAmount),
          paymentId: paymentId,
          email: user.email,
          userid: user.userId,
          products: cartData,
          date: addressInfo?.date
        };

        console.log(payLoad)


        postData(`/api/orders/create`, payLoad).then((res) => {
          fetchDataFromApi(`/api/cart?userId=${user?.userId}`).then((res) => {
            res?.length !== 0 && res?.map((item) => {
              deleteData(`/api/cart/${item?.id}`).then((res) => {
              })
            })
            setTimeout(() => {
              context.getCartData();
            }, 1000);
            history("/orders");
          });

        });
      },

      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <section className="section">
      <div className="container">
        <form className="checkoutForm" onSubmit={checkout}>
          <div className="row">
            <div className="col-md-8">
              <h2 className="hd">CHI TIẾT THANH TOÁN</h2>

              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Họ tên *"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="fullName"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Địa chỉ *"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="country"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>

              <h6>Địa chỉ chi tiết*</h6>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="Số nhà hoặc tên đường"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="streetAddressLine1"
                      onChange={onChangeInput}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Căn hộ, phòng suite, đơn vị, v.v. (tùy chọn)"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="streetAddressLine2"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>

              <h6>Tỉnh / Thành phố *</h6>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="Thành phố"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="city"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>

              <h6>Quận / Huyện*</h6>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="Quận/huyện"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="state"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>

              <h6>Mã bưu chính / ZIP *</h6>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="Mã bưu chính"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="zipCode"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Số điện thoại"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="phoneNumber"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Email"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="email"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card orderInfo">
                <h4 className="hd">Đơn hàng của bạn</h4>
                <div className="table-responsive mt-3">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Tổng cộng</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cartData?.length !== 0 &&
                        cartData?.map((item, index) => {
                          return (
                            <tr>
                              <td>
                                {item?.productTitle?.substr(0, 20) + "..."}{" "}
                                <b>× {item?.quantity}</b>
                              </td>

                              <td>
                                {item?.subTotal?.toLocaleString("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                })}
                              </td>
                            </tr>
                          );
                        })}

                      <tr>
                        <td>Tổng cộng </td>

                        <td>
                          {(cartData?.length !== 0
                            ? cartData
                              ?.map(
                                (item) => parseInt(item.price) * item.quantity
                              )
                              .reduce((total, value) => total + value, 0)
                            : 0
                          )?.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Button
                  type="submit"
                  className="btn-blue bg-red btn-lg btn-big"
                >
                  <IoBagCheckOutline /> &nbsp; Thanh toán
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
