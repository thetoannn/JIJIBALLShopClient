import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbDiscount2 } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
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
                Free shipping with all orders placed via the web
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates on
                <br /> promotions and coupons.
              </p>

              <form className="mt-4">
                <IoMailOutline />
                <input type="text" placeholder="Your Email Address" />
                <Button>Subscribe</Button>
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
              <span className="ml-2">Nationwide shipping <br />
                Payment upon receipt of goods</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <MdWorkspacePremium />
              </span>
              <span className="ml-2">Quality Assurance <br />
              Quality assured products</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <MdOutlinePayments />
              </span>
              <span className="ml-2">Make PAYMENT <br />
              With multiple METHODS</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <MdCurrencyExchange />
              </span>
              <span className="ml-2">Change to new product <br />
              If the product is defective</span>
            </div>
          </div>

          <div className="row mt-5 linksWrap">
            <div className="col">
              <h5>VỢT PICKLEBALL</h5>
              <ul>
                <li>
                  <Link to="#">Lotus</Link>
                </li>
                <li>
                  <Link to="#">Sypik</Link>
                </li>
                <li>
                  <Link to="#">Kamito</Link>
                </li>
                <li>
                  <Link to="#">Star Pickleball</Link>
                </li>
                {/* <li>
                  <Link to="#">Exotic Fruits & Veggies</Link>
                </li>
                <li>
                  <Link to="#">Packaged Produce</Link>
                </li>
                <li>
                  <Link to="#">Party Trays</Link>
                </li> */}
              </ul>
            </div>

            <div className="col">
              <h5>PHỤ KIỆN PICKLEBALL</h5>
              <ul>
                {/* <li>
                  <Link to="#">Fresh Vegetables</Link>
                </li>
                <li>
                  <Link to="#">Herbs & Seasonings</Link>
                </li>
                <li>
                  <Link to="#">Fresh Fruits</Link>
                </li>
                <li>
                  <Link to="#">Cuts & Sprouts</Link>
                </li>
                <li>
                  <Link to="#">Exotic Fruits & Veggies</Link>
                </li>
                <li>
                  <Link to="#">Packaged Produce</Link>
                </li>
                <li>
                  <Link to="#">Party Trays</Link>
                </li> */}
              </ul>
            </div>

            <div className="col">
              <h5>BÓNG PICKLEBALL</h5>
              <ul>
                <li>
                  <Link to="#">Fraklin</Link>
                </li>
                <li>
                  <Link to="#">Falcos</Link>
                </li>
                <li>
                  <Link to="#">Set Bóng Pickleball</Link>
                </li>
                {/* <li>
                  <Link to="#">Cuts & Sprouts</Link>
                </li>
                <li>
                  <Link to="#">Exotic Fruits & Veggies</Link>
                </li>
                <li>
                  <Link to="#">Packaged Produce</Link>
                </li>
                <li>
                  <Link to="#">Party Trays</Link>
                </li> */}
              </ul>
            </div>

            <div className="col">
              <h5>GIÀY PICKLEBALL</h5>
              <ul>
                <li>
                  <Link to="#">Kamito</Link>
                </li>
                {/* <li>
                  <Link to="#">Herbs & Seasonings</Link>
                </li>
                <li>
                  <Link to="#">Fresh Fruits</Link>
                </li>
                <li>
                  <Link to="#">Cuts & Sprouts</Link>
                </li>
                <li>
                  <Link to="#">Exotic Fruits & Veggies</Link>
                </li>
                <li>
                  <Link to="#">Packaged Produce</Link>
                </li>
                <li>
                  <Link to="#">Party Trays</Link>
                </li> */}
              </ul>
            </div>

            <div className="col">
              <h5>QUẤN CÁN VỢT</h5>
              <ul>
                {/* <li>
                  <Link to="#">Fresh Vegetables</Link>
                </li>
                <li>
                  <Link to="#">Herbs & Seasonings</Link>
                </li>
                <li>
                  <Link to="#">Fresh Fruits</Link>
                </li>
                <li>
                  <Link to="#">Cuts & Sprouts</Link>
                </li>
                <li>
                  <Link to="#">Exotic Fruits & Veggies</Link>
                </li>
                <li>
                  <Link to="#">Packaged Produce</Link>
                </li>
                <li>
                  <Link to="#">Party Trays</Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="copyright mt-3 pt-3 pb-3 d-flex">
            <p className="mb-0">
              <br />
              © JIJIBALL Shop <br />
              Copyright 2024. All rights reserved
            </p>
            <ul className="list list-inline ml-auto mb-0 socials">
              <li className="list-inline-item">
                <Link to="https://web.facebook.com/profile.php?id=61566880312514">
                  <FaFacebookF />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
