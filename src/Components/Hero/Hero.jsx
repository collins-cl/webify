import React from "react";
import "../Hero/Hero.css";
import { Link } from "react-router-dom";
import { AiOutlineCompass } from "react-icons/ai";
import {FaAngleRight} from "react-icons/fa"
import HeroImages from "../HeroDisplayImages/HeroImages";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="section1">
          <section>
            <div className="head">
              A New Way to Appreciate the <span>Artworks.</span>
            </div>
            <div className="head2">
              Find the most attractive and rarest NFTs to be your collection
            </div>
            <div className="head3">
              <Link>
                <AiOutlineCompass/> <span>Explore</span>
              </Link>

              <Link>
                <span>Learn More</span>
                <FaAngleRight  />
              </Link>
            </div>
          </section>
        </div>

        <div className="sections2">
          <HeroImages />
        </div>
      </div>
    </div>
  );
};

export default Hero;
