import React, { useState } from "react";
import css from "../CreateNft/CreateNft.module.css";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  description: "",
  url: "",
  supply: "",
  price: "",
  item: {},
};

const CreateNft = () => {
  const [state, setState] = useState(initialState);
  const [hidemodal, setHideModal] = useState(false);

  const handleState = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleClick = (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    setHideModal(true);
  };

  const handleSubmit = () => {
    const stateData = JSON.stringify(state);
    localStorage.setItem("item", stateData);
    setHideModal(false);
    console.log(state);
  };

  return (
    <div className={css.createnft}>
      <div className={css.createnft_wrapper}>
        {localStorage.getItem("user") ? (
          <>
            <div className={css.head}>Create New Item</div>

            <div className={css.warning}>
              Please make sure to complete all required fields <sup>*</sup>
            </div>

            <form onSubmit={handleClick} className={css.newitem_box}>
              <div className={css.item_image}>
                <p>
                  Images, Videos, Gifs <sup>*</sup>
                </p>
                <div className={css.description}>
                  File types supported: JPG, PNG, GIF, SVG, MP4, GLB, GLTF. Max
                  size:100 MB
                </div>
                <input type="file" name="item" onChange={handleState} />
              </div>

              <div className={css.name}>
                <p>
                  Name <sup>*</sup>
                </p>
                <input
                  type="text"
                  name="name"
                  placeholder="Item name"
                  required
                  onChange={handleState}
                />
              </div>

              <div className={css.external_link}>
                <p>External Link</p>
                <div className={css.description}>
                  Webify will include a link to this item's detail page, so that
                  users can click to learn more about it. You can add your
                  webpage URL too.
                </div>
                <input
                  type="url"
                  name="url"
                  placeholder="https://yoursite.com/123"
                  onChange={handleState}
                />
              </div>

              <div className={css.description_port}>
                <p>
                  Description <sup>*</sup>
                </p>
                <div className={css.description}>
                  The description will be included on the item's detail page.
                </div>
                <textarea
                  name="description"
                  placeholder="Provide a detailed description of your item."
                  required
                  onChange={handleState}
                />
              </div>

              <div className={css.supply}>
                <p>
                  Supply <sup>*</sup>
                </p>
                <div className={css.description}>
                  The number of items that can be minted. Maximum number is of
                  nft to mint is<span> 5</span>
                </div>
                <input
                  type="number"
                  name="supply"
                  max={5}
                  min={1}
                  required
                  onChange={handleState}
                />
              </div>

              <div className={css.supply}>
                <p>
                  Price <sup>*</sup>
                </p>
                <div className={css.description}>
                  The amount you want your NFT to be minted for.
                </div>
                <input
                  type="text"
                  name="price"
                  required
                  onChange={handleState}
                />
              </div>

              <button className={css.submit} type="submit">
                SUBMIT
              </button>

              {hidemodal && (
                <div className={css.modal}>
                  <div className={css.modalbox}>
                    <div className={css.body}>
                      Are you sure you want to proceed with minting this NFT?
                    </div>

                    <div className={css.action}>
                      <div className={css.approvals}>
                        <div className={css.yes} onClick={handleSubmit}>
                          Yes
                        </div>
                        <div
                          className={css.no}
                          onClick={() => setHideModal(false)}
                        >
                          No
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </>
        ) : (
          <div className={css.login_link}>
            You need to be logged in to create an NFT ☹️......
            <Link>Log In</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNft;
