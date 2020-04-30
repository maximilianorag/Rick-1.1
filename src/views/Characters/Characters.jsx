import React, { useState, useReducer } from "react";
import { DataTable } from "./_components/DataTable";
import "./Characters.css";
import { CharactersData } from "../../core/ApiConsumer/CharactersData/";
import { CardList } from "./_components/CardList/";
import { Button } from "primereact/button";

import { Layout } from "../_components/Layout/";

export const Characters = () => {
  // console.log("CharactersData", CharactersData());
  const initialState = {
    isVisibleCards: true,
    isVisibleTable: false
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "TOGLE_CARDS":
        return { ...state, isVisibleCards: true, isVisibleTable: false };
      case "TOGLE_TABLE":
        return { ...state, isVisibleCards: false, isVisibleTable: true };

      default:
        return state;
    }
  };

  const [visibleSectionState, visibleUSectionDispatch] = useReducer(
    reducer,
    initialState
  );
  console.log("visibleSectionState", visibleSectionState);
  return (
    <div className="back">
      {visibleSectionState.isVisibleCards && <CardList />}
      {visibleSectionState.isVisibleTable && <DataTable />}

      <Button
        label="Cards"
        onClick={() => visibleUSectionDispatch({ type: "TOGLE_CARDS" })}
      />

      <Button
        label="TableData"
        onClick={() => visibleUSectionDispatch({ type: "TOGLE_TABLE" })}
      />
    </div>
  );
};
