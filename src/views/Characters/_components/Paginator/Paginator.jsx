import React from "react";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import { TablePaginationActions } from './TablePaginationActions'
///////////

import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
export function Paginator(props) {
  const {
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
