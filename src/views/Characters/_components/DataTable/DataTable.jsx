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
import { TablePaginationActions } from "./Paginator";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
const DataParse = () => {
  debugger;
  const dataFetch = CharactersData();

  function createData(name, id, IMG, status, location) {
    return { name, id, IMG, status, location };
  }

  const columns = dataFetch
    .map(d => createData(d.name, d.id, d.image, d.status, d.location))
    .sort((a, b) => (a.id < b.id ? -1 : 1));
  return columns;
};
function RealFooter(props) {
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    tamaño
  } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={tamaño}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export function DataTable() {
  const columns = DataParse();
  const tamaño = columns.length;
  console.log("tamaño", tamaño);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
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
      </TableContainer>
      <RealFooter
        tamaño={tamaño}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleChangePage={handleChangePage}
      />
    </>
  );
}
