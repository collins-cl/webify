import React from "react";
import Auction from "../../Components/Auction/Auction";
import Faqs from "../../Components/FAQ/Faqs";
import Hero from "../../Components/Hero/Hero";
import Newsletter from "../../Components/Newsletter/Newsletter";
import PCollections from "../../Components/PopularCollections/PCollections";
import Steps from "../../Components/Steps/Steps";
import TopA from "../../Components/TopArtists/TopA";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Steps />
      <Auction />
      <TopA />
      <PCollections />
      <WhyChooseUs />
      <Faqs />
      <Newsletter />
    </div>
  );
};

export default Home;
