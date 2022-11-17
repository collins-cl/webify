import React from "react";
import "../PopularCollections/PCollections.css";
import { Link } from "react-router-dom";
import CoverPhoto from "../../Assets/Rectangle20.png";
import { AiOutlineHeart } from "react-icons/ai";
import DummyData from "../DummyData";

const PCollections = () => {
  const data = DummyData;

  return (
    <div className="pcollections">
      <div className="pcollections-wrapper">
        <div className="header">
          <div className="head-1">
            <div className="h1">Popular Collections</div>
            <div className="h2">Here the popular collections</div>
          </div>
          <div className="head-2">
            <Link>Explore More</Link>
          </div>
        </div>

        <div className="artists-collections">
          {data &&
            data.map((item,id) => (
              <div className="container" key={id}>
                <div className="image-container">
                  <div className="img-wrapper">
                    <img src={CoverPhoto} alt="" />
                    <div className="likes">
                      <AiOutlineHeart /> <p>{item.likes}</p>
                    </div>
                  </div>
                  <div className="avatar"></div>
                </div>
                <div className="title">{item.title}</div>
                <div className="owner">Created by {item.owner}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PCollections;
