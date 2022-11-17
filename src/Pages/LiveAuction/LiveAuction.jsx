import React from "react";
import "../LiveAuction/LiveAuction.css";
import { BsThreeDots } from "react-icons/bs";
import DummyData from "../../Components/DummyData";

const LiveAuction = () => {
  const Data = DummyData;

  return (
    <div className="l-auction">
      <div className="live-auction-container">
        <div className="header">
          <div className="heading">Live Auction</div>
          <div className="group">
            <div className="author">Author</div>
            <div className="highest-bids">Highest Bids</div>
          </div>
        </div>

        <div className="auctioned-items">
          {Data.map((item) => (
            <div className="item-wrapper">
              <div className="top">
                <div className="first">
                  <div className="avatar"></div>
                  <div className="author">{item.owner}</div>
                </div>

                <div className="menu">
                  <BsThreeDots />
                </div>
              </div>

              <div className="middle">
                <div className="img-wrapper">
                  <div className="img"></div>
                  <div className="countdown">{item.countdown}</div>
                </div>
              </div>

              <div className="bottom">
                <div className="title">{item.title}</div>

                <div className="place-bid">
                  <div className="amount">
                    <p>Current Bid</p>
                    <span>{item.price} ETH</span>
                  </div>

                  <div className="bid">
                    <p>Mint</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;
