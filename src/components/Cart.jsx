import React, { useEffect, useState } from "react";
import "../components/Cart.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HarryPotterListGetApi } from "../store/slice/HarryPotterSlice";
import userpic from "../components/images/user.png";

const Cart = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const Apidata = useSelector((state) => state.HarryPotterSlice, shallowEqual);

  useEffect(() => {
    setData(Apidata.data);
  }, [Apidata, setData]);

  useEffect(() => {
    dispatch(HarryPotterListGetApi());
  }, [HarryPotterListGetApi, dispatch]);

  return (
    <div className="characterList" id="ListApi">
      {data &&
        data.map((item) => {
          return (
            <div className="box" key={item.id}>
              <div className="nameBox">{item.name}</div>
              <div className="photoBox">
                <img
                  src={item.image ? item.image : userpic}
                  alt={item.name}
                  height="200"
                  width="200"
                />
              </div>
              <div className="smallBox">
                <table style={{ width: "100%" }}>
                  <tr>
                    <td>Species</td>
                    <td>{`${item.species ? item.species : "None"}`}</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>{`${item.gender ? item.gender : "None"}`}</td>
                  </tr>
                  <tr>
                    <td>House</td>
                    <td>{`${item.house ? item.house : "None"}`}</td>
                  </tr>
                  <tr>
                    <td>DateOfBirth</td>
                    <td>{`${item.dateOfBirth ? item.dataOfBirth : "None"}`}</td>
                  </tr>
                  <tr>
                    <td>YearOfBirth</td>
                    <td>{`${item.yearOfBirth ? item.yearOfBirth : "None"}`}</td>
                  </tr>
                  <tr>
                    <td>wizard</td>
                    <td>{`${item.wizard ? item.width : "None"}`}</td>
                  </tr>
                  <tr>
                    <td>Ancestry</td>
                    <td>{`${item.ancestry ? item.ancestry : "None"}`}</td>
                  </tr>
                  <tr>
                    <td>EyeColour</td>
                    <td>{`${item.eyeColour ? item.eyeColour : "None"}`}</td>
                  </tr>
                  <tr>
                    <td>HairColour</td>
                    <td>{`${item.hairColour ? item.hairColour : "None"}`}</td>
                  </tr>
                  <tr>
                    <td>Wand</td>
                    {item.wand.wood || item.wand.core || item.wand.length ? (
                      <>
                        <tr>
                          <td>{`${
                            item.wand.wood ? item.wand.wood : "None"
                          }`}</td>
                        </tr>
                        <tr>
                          <td>{`${
                            item.wand.core ? item.wand.core : "None"
                          }`}</td>
                        </tr>
                        <tr>
                          <td>{`${
                            item.wand.length ? item.wand.length : "None"
                          }`}</td>
                        </tr>
                      </>
                    ) : (
                      <td>None</td>
                    )}
                  </tr>
                  <tr>
                    <td>Patronus</td>
                    <td>{`${item.patronus ? item.patronus : "None"}`}</td>
                  </tr>
                  <tr>
                    <td>HogwartsStudent</td>
                    <td>{`${
                      item.hogwartsStudent ? item.hogwartsStudent : "None"
                    }`}</td>
                  </tr>
                  <tr>
                    <td>HogwartsStaff</td>
                    <td>{`${
                      item.hogwartsStaff ? item.hogwartsStaff : "None"
                    }`}</td>
                  </tr>
                  <tr>
                    <td>Actor</td>
                    <td>{`${item.actor ? item.actor : "None"}`}</td>
                  </tr>
                  <tr>
                    <td>alive</td>
                    <td>{`${item.alive ? item.alive : "None"}`}</td>
                  </tr>
                </table>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
