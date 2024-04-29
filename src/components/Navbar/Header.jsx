import React, { useState } from "react";
import "../Navbar/Header.css";
import { useDispatch } from "react-redux";
import {
  updateData,
  filterData,
  HarryPotterListGetApi,
} from "../../store/slice/HarryPotterSlice";

const Header = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const HandlechangeValue = (e) => {
    let value = e.target.value.toLowerCase();
    setName(value);
    dispatch(filterData(value));
  };

  //howard Student & Staff
  const Howard = (value) => {
    dispatch(updateData(value));
  };

  // handle home
  const HandleHome = () => {
    dispatch(HarryPotterListGetApi());
  };

  // search btn
  const searchBtn = () => {
    dispatch(filterData(name));
  };

  return (
    <>
      <div className="header">
        <div className="headerNameBox">
          <p className="headerName">
            <a onClick={HandleHome}>Harry Potter Character List</a>
          </p>
        </div>
        <div className="searchBox">
          <input
            type="text"
            list="browsers"
            id="searchBar"
            placeholder="Enter The Name...."
            onChange={HandlechangeValue}
          />
          <input
            type="button"
            value="Search"
            id="searchBTN"
            onClick={searchBtn}
          />
        </div>
      </div>
      <div className="mainTop">
        <div className="howardBtn">
          <button
            type="button"
            onClick={() => Howard("hogwartsStudent")}
            className="btn"
          >
            Howard Student
          </button>
        </div>
        <div className="howardBtn">
          <button
            type="button"
            onClick={() => Howard("hogwartsStaff")}
            className="btn"
          >
            Howard Staff
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
