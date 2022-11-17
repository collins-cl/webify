import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";
import { CiSearch } from "react-icons/ci";
import { FaTimes, FaBars } from "react-icons/fa";
import "../NavBar/Navbar.css";

const Navbar = () => {
  const [layout, setLayout] = useState(false);
  const [opennav, setOpenNav] = useState(false);

  const handleClick = () => {
    setOpenNav(!opennav);
  };

  const handleClose = () => {
    setOpenNav(false);
  };

  const hamOPen = <FaBars onClick={handleClick} className="hamburger" />;
  const hamClose = <FaTimes onClick={handleClick} className="hamburger" />;

  const changeLayout = () => {
    if (window.scrollY >= 20) {
      setLayout(true);
    } else {
      setLayout(false);
    }
  };

  window.addEventListener("scroll", changeLayout);

  return (
    <div className="navbar">
      <div className={layout ? "nav-active" : "nav-wrapper"}>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img src={Logo} width={30} alt="homepage" />
              <p>Webify</p>
            </Link>
          </div>

          <div className="searchbar">
            <input type="search" name="search" placeholder="Search" />
            <CiSearch className="search-icon" />
          </div>

          <div className={opennav ? "links-active" : "links"}>
            <Link onClick={handleClose}>New Items</Link>
            <Link onClick={handleClose}>Featured Artist</Link>
            <Link onClick={handleClose}>About Us</Link>
            <Link onClick={handleClose}>Contact Us</Link>
          </div>

          <div className="lorem">Log In</div>

          {opennav ? hamClose : hamOPen}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
