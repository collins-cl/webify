import React from "react";
import "../Auction/Auction.css";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { MdAlarm } from "react-icons/md";
import DummyData from "../DummyData";

const Auction = () => {
  const data = DummyData;

  const navigate = useNavigate();

  return (
    <div className="auction">
      <div className="auction-wrapper">
        <div className="header">
          <div className="header-1">
            <div className="h-1">Live Auctions</div>
            <div className="h-2">
              Complete with others to get the rarest NFT items
            </div>
          </div>

          <div className="header-2">
            <Link to="auction">Explore More</Link>
          </div>
        </div>

        <div className="auctions">
          {data &&
            data.map((item, id) => (
              <div className="a-box" key={item.id}>
                <div className="img">
                  <div className="img-box"></div>
                  <div className="countdown">
                    <MdAlarm color="white" className="white" />{" "}
                    <p>{item.countdown}</p>
                  </div>
                </div>
                <div className="title">
                  <h4>{item.title}</h4>
                  <BsThreeDots className="options" />
                </div>

                <div className="details">
                  <div className="info">
                    <div className="avatar"></div>
                    <div className="user">
                      <div className="owner">Created by</div>
                      <div className="name">{item.owner}</div>
                    </div>
                  </div>

                  <div className="price">{item.price}ETH</div>
                </div>
                <div className="place-bid" onClick={() => navigate(`/auction/item/${item.title}`)}>
                  Mint
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Auction;
