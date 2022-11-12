import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-scroll";
import { Link as A } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";
import { FaDiscord, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="box1">
          <div className="footer-logo">
            <Link to="hero" spy={true} smooth={true}>
              <img src={Logo} width={30} alt="" />
              <p>Webify</p>
            </Link>
          </div>

          <div className="info">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, magnam
          </div>
        </div>

        <div className="box2">
          <div className="link1">
            <p>About US</p>
            <div className="links">
              <A>About</A>
              <A>Contact</A>
            </div>
          </div>
          <div className="link2">
            <p>Links</p>
            <div className="links">
              <A>Blog</A>
              <A>Support</A>
            </div>
          </div>
          <div className="link3">
            <p>Community Links</p>
            <div className="links">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Discord
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>

          <div className="link4">
            <p>Social Media</p>
            <div className="links">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
