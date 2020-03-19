import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Characters.css";
import { Cards } from "./_components/Cards";

export const Characters = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const response = async () => {
      try {
        const responsive = await axios(
          " https://rickandmortyapi.com/api/character/?page=19"
        );

        setData(responsive.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    response();
  }, []);

  function data(responsive) {
    return console.log("responsive", responsive);
  }
  data();

  const Cartas = () => {
    return data.map((PJ, index) => {
      return (
        <div className="Cards" key={index}>
          <Cards
            name={PJ.name}
            origin={PJ.origin.name}
            image={PJ.image}
            gender={PJ.gender}
            location={PJ.location.name}
          />
        </div>
      );
    });
  };

  return (
    <div className="back">
      {" "}
      <Cartas />{" "}
    </div>
  );
};
