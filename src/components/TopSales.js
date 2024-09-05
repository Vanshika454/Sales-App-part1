import React from "react";
import Table from "react-bootstrap/Table";
function TopSales() {
  return (
    <div>
      {" "}
      <h1 style={{ margin: "1rem", textAlign: "center" }}>TOP 5 SALES</h1>
      <Table
        hover
        style={{
          marginLeft: "10%",
          width: "80%",
          padding: "2rem",
        }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Sales Id:</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Sale Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>S1212</td>
            <td>Laptop</td>
            <td>2</td>
            <td>90000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>S1423</td>
            <td>Mobile</td>
            <td>5</td>
            <td>85000</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TopSales;
