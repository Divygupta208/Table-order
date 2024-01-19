import React from "react";

const Table = ({ table, setTableItems }) => {
  const removeItem = () => {
    setTableItems(table.id);
  };

  return (
    <div>
      <ul>
        <li key={table.id}>
          {table.Table_id}-{table.price}-{table.dish}
        </li>
      </ul>
      <button className="deleteBtn" onClick={removeItem}>
        Delete
      </button>
    </div>
  );
};

export default Table;
