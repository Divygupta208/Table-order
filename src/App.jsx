import { useEffect, useState } from "react";
import Input from "./components/Input";
import Tables from "./components/Tables";

const INITIAL_VALUE = [];

function App() {
  const [table, setTable] = useState(INITIAL_VALUE);

  const setItemsHandler = (id, price, dish, Table_id) => {
    setTable((prev) => {
      return [
        ...prev,
        {
          id: id,
          price: price,
          dish: dish,
          Table_id: Table_id,
        },
      ];
    });
  };

  const removeItemHandler = (id) => {
    const newItems = [...table].filter((item) => {
      return item.id !== id;
    });

    setTable(newItems);
    localStorage.removeItem(id);
  };

  return (
    <>
      <Input setItems={setItemsHandler} />
      <Tables tableData={table} setTableItems={removeItemHandler} />
    </>
  );
}

export default App;
