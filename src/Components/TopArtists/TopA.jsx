import React from "react";
import "../TopArtists/TopA.css";
import { Link } from "react-router-dom";
import DummyData from "../DummyData";

const TopA = () => {
  const data = DummyData;

  return (
    <div className="topart">
      <div className="topart-wrapper">
        <div className="header">
          <div className="head-1">
            <div className="h1">Top Artist</div>
            <div className="h2">
              The hands that create many interesting NFTs
            </div>
          </div>
          <div className="head-2">
            <Link>Explore More</Link>
          </div>
        </div>

        <div className="topart-artists">
          {data &&
            data.map((item, id) => (
              <div className="artist-info" key={id}>
                <div className="img">
                  {item.owner.split(" ")[0].split("")[0]}{" "}
                  {
                    item.owner
                      .split(" ")
                      [item.owner.split(" ").length - 1].split("")[0]
                  }
                </div>
                <div className="info">
                  <div className="name">{item.owner}</div>
                  <div className="price">{item.price} ETH</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopA;
