import React from "react";
import Cart from "../Cart";
import Header from "../Navbar/Header";
import "../Home/Home.css";

const Home = () => {
  return (
    <>
      <div className="contaniner">
        <Header />
        <Cart />
      </div>
    </>
  );
};

export default Home;
