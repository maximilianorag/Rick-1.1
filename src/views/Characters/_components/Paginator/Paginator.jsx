import React from "react";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import { TablePaginationActions } from "./TablePaginationActions";
///////////

import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
export function Paginator(props) {
  const {
    url,
    rowsPerPageOptions,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    tamaño
  } = props;

  return (
    <TableContainer component={Paper} style={{ backgroundColor: "lightgrey" }}>
      <Table aria-label="custom pagination table">
        <TableFooter>
          <TableRow>
            <select id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <button style={{ marginTop: 10 }}>12345</button>
            <TablePagination
              rowsPerPageOptions={rowsPerPageOptions}
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
