import React, { useState } from "react";
import "./navbar.css";
import headerlogo from "./tripsitelogo.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Input, Space } from "antd";
import ContactForm from "./contact";
import { MdSms } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Header from "../Header/header";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [contactFormVisible, setContactFormVisible] = useState(false);

  // ✅ isActive state komponent darajasida bo‘lishi kerak
  const [isActive, setIsActive] = useState(false);

  const handleNavBarClick = () => {
    setIsActive((prev) => !prev); // toggle qilish
    // onClick={handleNavBarClick}    --> nav bar funksiyasi
  };
  const [navbar, setNavBar] = useState(false);
  const handleMenuNavBarClick = () => {
    setNavBar(!navbar);
  };

  const handleContactClick = () => {
    setContactFormVisible((prev) => !prev);
  };

  const handleIphone = () => {
    window.location.href = "tel:+998912097907";
  };

  return (
    <>
      <header className="navbar">
        {/* Logo */}
        <div className="header-left">
          <div className="menu-bar" onClick={handleMenuNavBarClick}>
            <IoMenu />
          </div>
          <img src={headerlogo} alt="Trip Site Logo" className="logo" />

          {/* Rating section */}
          <div className="rating">
            <div>
              <span>4.6</span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <span className="reviews">Based on 5,939 reviews</span>
          </div>
        </div>

        {/* Contact + Input + Language */}
        <div className="header-right">
          <div className="header-contact">
            <button className="button-contact" onClick={handleContactClick}>
              <MdSms />
              Contact
            </button>

            <button className="button-contact" onClick={handleIphone}>
              <FaPhoneAlt />
              <span className="phone-media1">+ 998 91 209 79 07</span>
              <span className="phone-media2">Call</span>
            </button>

            <Space direction="vertical" size={10} className="inputs">
              <Input.Search placeholder="Search by location or trip" />
            </Space>

            <select>
              <option value="eng">EN</option>
              <option value="ru">RU</option>
            </select>
          </div>
          {/* <div className="header-nav">
            <div className="nav-dev">
              <p>BROWSE TOURS</p>
            </div>
            <div className="nav-dev">
              <p>TRIP ESSENTIALS </p>
            </div>
            <div className="nav-dev">
              <p>OUR STORY </p>
            </div>
            <div className="nav-dev">
              <p>BLOG </p>
            </div>
          </div> */}
          {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Nav Bar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <div className={navbar ? "header-nav-menu" : "header-nav"}>
            <div className="nav-dev">
              <p>BROWSE TOURS</p>
            </div>
            <div className="nav-dev">
              <p>TRIP ESSENTIALS </p>
            </div>
            <div className="nav-dev">
              <p>OUR STORY </p>
            </div>
            <div className="nav-dev">
              <p>BLOG </p>
            </div>
          </div>
          {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Nav Bar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        </div>
        <div className={isActive ? "active" : "noactive"}></div>
      </header>
      <div className="header-line"></div>
      {contactFormVisible && <ContactForm />}
      <Header />
    </>
  );
}

export default Navbar;
