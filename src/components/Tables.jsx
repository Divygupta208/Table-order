import React from "react";
import Table from "./Table";

const Tables = ({ tableData, setTableItems }) => {
  return (
    <>
      <div>
        <h1>Orders</h1>
        <div>
          <h2>Table 1</h2>
          {tableData.map((data) => {
            return (
              data.Table_id === "1" && (
                <Table table={data} setTableItems={setTableItems} />
              )
            );
          })}
        </div>
        <div>
          <h2>Table 2</h2>
          {tableData.map((data) => {
            return (
              data.Table_id === "2" && (
                <Table table={data} setTableItems={setTableItems} />
              )
            );
          })}
        </div>
        <div>
          <h2>Table 3</h2>
          {tableData.map((data) => {
            return (
              data.Table_id === "3" && (
                <Table table={data} setTableItems={setTableItems} />
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tables;
