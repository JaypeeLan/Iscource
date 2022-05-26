import React from "react";
import logo from "./logo.jpg";
import img from "https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Page = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
      </header>

      <div id="page-content">
        {/* <img src={img} alt="Pic" /> */}
        <article>
          <h1> Source from over 100 verified farms</h1>
          <h2>Sell directly to verified buyers</h2>

          <p>
            We are bringing convenience of procurement service to medium and
            large-scale businesses
          </p>

          <ul>
            <li>Pay and get paid from your wallet</li>
            <li>Track sales and revenue</li>
            <li>Field monitoring</li>
            <li>Track commodity shipment</li>
            <li>Input distribution</li>
            <li>Schedule invetory supply (daily, weekly, monthly)</li>
            <li>24/7 support</li>
          </ul>

          <p>ISOURCE IS COMING SOON!!</p>
        </article>
      </div>
    </div>
  );
};

export default Page;
