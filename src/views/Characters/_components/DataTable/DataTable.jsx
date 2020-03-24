import React from "react";
import { CharactersData } from "../../../../core/ApiConsumer/CharactersData";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { RealFooter } from "./Paginator";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(name, id, IMG, status, location) {
  return { name, id, IMG, status, location };
}

export function DataTable() {
  const dataFetch = CharactersData();
  console.log("dataFetch", dataFetch);
  // const rowi = dataFetch.map(PJ =>
  //   createData(PJ.name, PJ.origin, PJ.status, PJ.location)
  // );
  // console.log("rowi", rowi);
  const classes = useStyles();

  const columns = dataFetch
    .map(d => createData(d.name, d.id, d.image, d.status, d.location))
    .sort((a, b) => (a.id < b.id ? -1 : 1));
  console.log("columns", columns);
  const imgStyle = {
    width: "100px",
    height: "100px"
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell align="right">
                <b>origin</b>
              </TableCell>
              <TableCell align="right">IMG preview</TableCell>
              <TableCell align="right">
                <b>Status</b>
              </TableCell>
              <TableCell align="center">Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {columns.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.origin}</TableCell>
                <TableCell align="right">
                  <img src={row.IMG} style={imgStyle} />
                </TableCell>
                <TableCell align="right">
                  {row.status === "Dead" ? (
                    <div style={{ color: "red" }}>{row.status}</div>
                  ) : (
                    row.status
                  )}
                </TableCell>
                <TableCell align="right">{row.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <RealFooter />
    </>
  );
}
