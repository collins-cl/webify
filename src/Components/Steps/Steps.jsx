import React from "react";
import "../Steps/Steps.css";
import Box1 from "../../Assets/shop.png";
import Box2 from "../../Assets/ethereum.png";
import Box3 from "../../Assets/nft.png";

const Steps = () => {
  return (
    <div className="steps">
      <div className="steps-wrapper">
        <div className="header">How It Works</div>
        <div className="container">
          <div className="box1">
            <img src={Box2} alt="" />
            <div className="head">Set your wallet</div>
            <p>
              Decide which wallet you want to use as your transaction method
            </p>
          </div>
          <div className="box1">
            <img src={Box3} alt="" />
            <div className="head">Add your NFT's</div>
            <p>
              If you are a creator/designer, you can add your NFTs to the
              display
            </p>
          </div>
          <div className="box1">
            <img src={Box1} alt="" />
            <div className="head">Buy/Sell your Collection/NFT's</div>
            <p>
              You can buy the NFTs you like or sell your NFTs to earn some cash
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
