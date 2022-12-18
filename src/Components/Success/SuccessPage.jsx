import React from "react";
import css from "../Success/Successpage.module.css";
import { Link } from "react-router-dom";

const SuccessPage = ({ props }) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.head}>Your action was a success 💡</div>
        <Link className={css.link}>Proceed to view NFT</Link>
      </div>
    </div>
  );
};

export default SuccessPage;
