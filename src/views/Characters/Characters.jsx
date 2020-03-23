import React, { useState } from "react";
import { DataTable } from "./_components/DataTable";
import "./Characters.css";
import { Cards } from "./_components/Cards";
import { CharactersData } from "../../core/ApiConsumer/CharactersData/";
export const Characters = () => {
  // console.log("CharactersData", CharactersData());
  const [Page, setPage] = useState(1);

  const dataFetch = CharactersData(Page);

  const Cartas = () => {
    return dataFetch.map((PJ, index) => {
      return (
        <div className="Cards" key={index}>
          <Cards
            name={PJ.name}
            origin={PJ.origin}
            image={PJ.image}
            status={PJ.status}
            location={PJ.location}
          />
        </div>
      );
    });
  };

  return (
    <div className="back">
      <Cartas />
      <DataTable />
    </div>
  );
};
