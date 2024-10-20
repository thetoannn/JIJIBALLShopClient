import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbDiscount2 } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebook, FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import newsLetterImg from "../../assets/images/newsletter.png";
import Button from "@mui/material/Button";
import { IoMailOutline } from "react-icons/io5";
import Banners from "../banners/index";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";

const Footer = () => {
  const [bannerList, setBannerList] = useState([]);

  return (
    <>
      <div className="container">

      </div>
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                Miễn phí vận chuyển với tất cả các đơn hàng được đặt qua web
              </p>
              <h3 className="text-white">Tham gia bản tin của chúng tôi và nhận...</h3>
              <p className="text-light">
              Tham gia đăng ký email của chúng tôi ngay bây giờ để nhận thông tin cập nhật về
                <br /> khuyến mãi và phiếu giảm giá.
              </p>

              <form className="mt-4">
                <IoMailOutline />
                <input type="text" placeholder="Nhập Email của " />
                <Button>Đăng ký</Button>
              </form>
            </div>

            <div className="col-md-6">
              <img src={newsLetterImg} />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="topInfo row">
            <div className="col d-flex align-items-center">
              <span>
                <TbTruckDelivery />
              </span>
              <span className="ml-2">Vận chuyển toàn quốc <br />
                Thanh toán khi nhận hàng</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <MdWorkspacePremium />
              </span>
              <span className="ml-2">Đảm bảo chất lượng <br />
                Sản phẩm đảm bảo chất lượng</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <MdOutlinePayments />
              </span>
              <span className="ml-2">Tiến hành THANH TOÁN <br />
                Với nhiều PHƯƠNG THỨC</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <MdCurrencyExchange />
              </span>
              <span className="ml-2">Đổi sản phẩm mới <br />
                nếu sản phẩm lỗi</span>
            </div>
          </div>
        </div>
      </footer>
      <section id="footer">
        <div id="footer-con">
          <div id="head-footer" style={{width: "60%"}}>
            <div id="logo-footer">
              <h1><a style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} href="/"> Ji Ji Ball </a> </h1>
              <p>Phục vụ những nhu cầu thiết yếu của cộng đồng PICKLEBALL</p>
            </div>
          </div>
          <div id="text-link" style={{width: "60%"}}>
            <div className="links">
              <div id="link-info">
                <h4>Về chúng tôi</h4>
                <p>Giới thiệu</p>
                <p>Hướng dẫn sử dụng</p>
                <p>Phản hồi, góp ý</p>
              </div>
              <div id="link-info">
                <h4>Hợp tác và liên kết</h4>
                <p>
                  Cùng JIJI Pickleball phát triển cộng đồng Pickleball tại Việt Nam
                </p>
                <div id="contact">
                  <h4>Liên hệ với chúng tôi qua:</h4>
                  <div id="social-icons" >
                    <a
                      href="https://web.facebook.com/profile.php?id=61566880312514"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://zalo.me"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zalo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



export default Footer;
