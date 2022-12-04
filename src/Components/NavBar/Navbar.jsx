import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";
import { CiSearch } from "react-icons/ci";
import { FaTimes, FaBars } from "react-icons/fa";
import { MdOutlineShoppingBasket } from "react-icons/md";
import "../NavBar/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [layout, setLayout] = useState(false);
  const [opennav, setOpenNav] = useState(false);
  const [openprofile, setOpenProfile] = useState(false);

  const handleClick = () => {
    setOpenNav(!opennav);
  };

  const handleClose = () => {
    setOpenNav(false);
  };

  const handleOpenProfile = () => {
    setOpenProfile(!openprofile);
  };

  const handleCloseProfile = () => {
    setOpenProfile(false);
  };

  const login = () => {
    localStorage.setItem("user", true);
    window.location.reload();
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
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

  // window.addEventListener("click", handleCloseProfile);

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

          {location.pathname === "/" ? null : (
            <div className="mint-cart">
              <MdOutlineShoppingBasket />
              <p>0</p>
            </div>
          )}

          {localStorage.getItem("user") ? (
            <div className="profile-box">
              <div
                className="profile-box-avatar"
                onClick={handleOpenProfile}
              ></div>
              {openprofile ? (
                <div className="profile-box-options">
                  <Link className="profile-name" onClick={handleCloseProfile}>
                    Collins Olads
                  </Link>
                  <Link
                    to="/createnft"
                    className="create-nft"
                    onClick={handleCloseProfile}
                  >
                    Create New NFT
                  </Link>
                  <Link className="display-nfts" onClick={handleCloseProfile}>
                    Display NFTs
                  </Link>
                  <Link className="settings" onClick={handleCloseProfile}>
                    Settings
                  </Link>
                  <div className="logout" onClick={logout}>
                    Log Out
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="login-button" onClick={login}>
              Log In
            </div>
          )}

          {opennav ? hamClose : hamOPen}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
