import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Caballo", 18908424, "2 Marzo 2022", "vendido"),
  createData("vaca", 18908424, "2 Marzo 2022", "vendido"),
  createData("pollo", 18908424, "2 Marzo 2022", "vendido"),
  createData("cerdo", 18908421, "2 Marzo 2022", "vendido"),
];

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Ventas Recientes</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Identificacion</TableCell>
                <TableCell>Producto</TableCell>
                <TableCell align="left">Fecha</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status">{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Detalles</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
