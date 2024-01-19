import React, { useRef, useState } from "react";
import classes from "./Input.module.css";
import Card from "./UI/Card";

const Input = ({ setItems }) => {
  const id = useRef();
  const price = useRef();
  const dish = useRef();
  const Table_id = useRef();
  const [error, setError] = useState();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const unique_id = id.current.value;
    const my_price = price.current.value;
    const my_dish = dish.current.value;
    const table_id = Table_id.current.value;

    setItems(unique_id, my_dish, my_price, table_id);

    const myobj = {
      unique_id: unique_id,
      dish: my_dish,
      price: my_price,
      table_id: table_id,
    };

    localStorage.setItem(unique_id, JSON.stringify(myobj));
  };

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={onFormSubmit}>
          <div className="main">
            <label for="unique_id">Unique_Order_ID</label>
            <input ref={id} type="number" id="unique_id" />
            <label for="price">choose price</label>
            <input ref={price} type="number" id="price" />
            <label for="dish">choose dish</label>
            <input ref={dish} type="text" id="dish" />
            <label for="table_no">Choose Table</label>
            <select ref={Table_id} id="table_no">
              <option value="1">Table 1</option>
              <option value="2">Table 2</option>
              <option value="3">Table 3</option>
            </select>
            <button className="addBtn">Add To Table</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Input;
