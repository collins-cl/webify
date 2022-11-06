import React from "react";
import Auction from "../../Components/Auction/Auction";
import Hero from "../../Components/Hero/Hero";
import PCollections from "../../Components/PopularCollections/PCollections";
import Steps from "../../Components/Steps/Steps";
import TopA from "../../Components/TopArtists/TopA";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Steps />
      <Auction />
      <TopA />
      <PCollections />
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
      <p>sss</p>
    </div>
  );
};

export default Home;
