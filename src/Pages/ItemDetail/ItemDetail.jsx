import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DummyData from "../../Components/DummyData";
import "../ItemDetail/ItemDetail.css";

const ItemDetail = () => {
  const { title } = useParams();
  const [data, setData] = useState([]);
  const res = DummyData;

  useEffect(() => {
    // setData(res[id?.[0]])
    console.log(data);
  }, [data, res, title]);

  return (
    <div className="itemdetail">
      <div className="itemdetail-container">
        <div className="item-image">
          <div className="img"></div>
        </div>
        <div className="item-description">
          <div className="title">Abstract Nature</div>

          <div className="activities">
            <div className="countdown">12:22:22</div>
            <div className="watching">550</div>
            <div className="likes">1023</div>
          </div>

          <div className="info">
            <div className="head">Description</div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              aspernatur iure sed nobis consequuntur nemo voluptatem corporis,
              voluptatibus doloremque quam explicabo nisi porro impedit, dolore
              similique odit assumenda placeat ad.
            </div>
          </div>

          <div className="owner">
            <div className="created-by">
              <div className="img"></div>
              <div className="person">
                <div className="name">Created By</div>
                <p>Collins Olads</p>
              </div>
            </div>

            <div className="collection">
              <div className="name">Collection</div>
              <div className="title">Abstract Attractive</div>
            </div>
          </div>

          <div className="price">
            <p>Price</p>
            <div className="amount">
              0.0043ETH <span>($352.42)</span>
            </div>
          </div>

          <div className="actions">
            <div className="bid">Add To Cart</div>

            <div className="buy">Mint Now</div>
          </div>

          <div className="events">
            <div className="b-history">
              <div className="title">Buy History</div>
              <div className="histories">
                <div className="section">
                  <div className="avatar"></div>
                  <div className="activities">
                    <div className="activities-amount">Bought 0.003ETH</div>
                    <div className="activities-details">
                      By <span>Collins</span> at 12/11/2022
                    </div>
                  </div>
                </div>
                <div className="section">
                  <div className="avatar"></div>
                  <div className="activities">
                    <div className="activities-amount">Bid 0.003ETH</div>
                    <div className="activities-details">
                      By <span>Collins</span> at 12/11/2022
                    </div>
                  </div>
                </div>
                <div className="section">
                  <div className="avatar"></div>
                  <div className="activities">
                    <div className="activities-amount">Bid 0.003ETH</div>
                    <div className="activities-details">
                      By <span>Collins</span> at 12/11/2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
