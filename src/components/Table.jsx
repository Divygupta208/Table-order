import React from "react";

const Table = ({ table, setTableItems }) => {
  const removeItem = () => {
    setTableItems(table.id, table.Table_id);
  };

  return (
    <div>
      <ul>
        <li key={table.id}>
          Table-{table.Table_id}-{table.price}-{table.dish}-Order_NO.-{table.id}
        </li>
      </ul>
      <button className="deleteBtn" onClick={removeItem}>
        Delete
      </button>
    </div>
  );
};

export default Table;
