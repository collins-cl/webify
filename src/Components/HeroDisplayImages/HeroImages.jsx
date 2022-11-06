import React from "react";
import "../HeroDisplayImages/HeroImages.css";
import Image1 from "../../Assets/Rectangle14.png";
import Image2 from "../../Assets/Rectangle14-1.png";
import Image3 from "../../Assets/Rectangle14-2.png";
import Image4 from "../../Assets/Rectangle14-3.png";
import Image5 from "../../Assets/Rectangle14-4.png";
import Image6 from "../../Assets/Rectangle18.png";
import Image7 from "../../Assets/Rectangle20.png";
import Image8 from "../../Assets/Rectangle21.png";

const HeroImages = () => {
  return (
    <div className="h-images">
      <div className="h-images-wrapper">
        <div className="firstchild">
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image3} alt="" />
        </div>
        <div className="secondchild">
          <img src={Image4} alt="" />
          <img src={Image5} alt="" />
          <img src={Image6} alt="" />
        </div>
        <div className="thirdchild">
          <img src={Image7} alt="" />
          <img src={Image8} alt="" />
          <img src={Image3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroImages;
