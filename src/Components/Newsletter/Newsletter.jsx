import React from "react";
import "../Newsletter/Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-wrapper">
        <div className="heading">
          Signup for our newsletter to get the latest information in your inbox
          <div className="info">
            No spam message, your email is safe with us
          </div>
        </div>
        <div className="letter">
          <input
            type="email"
            name="email"
            placeholder="Type your email here"
            required
          />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
