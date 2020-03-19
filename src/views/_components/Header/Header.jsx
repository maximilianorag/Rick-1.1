import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./Header.css";
export const Header = () => {
  return (
    <div className="Header">
      <nav>
        <Button variant="contained">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </Button>{" "}
        <Button variant="contained">
          <NavLink to="/Characters">Characters</NavLink>
        </Button>
        {"  "}
        <Button variant="contained">
          <NavLink to="/about">About</NavLink>
        </Button>
      </nav>
    </div>
  );
};
