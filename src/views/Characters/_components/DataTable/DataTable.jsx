import React, { useState } from "react";
import { CharactersData } from "../../../../core/ApiConsumer/CharactersData";
///
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Paginator } from "../Paginator/Paginator";
const DataParse = pagina => {
  const dataFetch = CharactersData(pagina);

  function createData(name, id, origin, IMG, status, location) {
    return { name, id, origin, IMG, status, location };
  }

  const columns = dataFetch
    .map(d => createData(d.name, d.id, d.origin, d.image, d.status, d.location))
    .sort((a, b) => (a.id < b.id ? -1 : 1));
  return columns;
};

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export function DataTable() {
  const [url, seturl] = useState(2);
  const columns = DataParse(url);
  const tamaño = columns.length;
  console.log("tamaño", tamaño);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, columns.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const classes = useStyles();

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
            {(rowsPerPage > 0
              ? columns.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : columns
            ).map(row => (
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
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <button
          onClick={() => {
            seturl(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            seturl(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            seturl(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            seturl(4);
          }}
        >
          4
        </button>
      </TableContainer>
      <Paginator
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        tamaño={tamaño}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPage={rowsPerPage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleChangePage={handleChangePage}
      />
    </>
  );
}
