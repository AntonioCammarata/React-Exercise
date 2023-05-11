import React, { useState } from "react";

function TodoList4() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItemValue = event.target.itemInput.value;
    setItems([...items, newItemValue]);
    setInputValue("");
  };

  const handleReset = (event) => {
    event.preventDefault();
    setItems([]);
    setInputValue("");
  };
  const handleRemove = (event) => {
    const removeItems = [...items];
    removeItems.splice(event, 1);
    setItems(removeItems);
  };
  return (
    <div>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          name="itemInput"
        />
        <button type="submit">Add</button>
        <button type="click" onClick={handleReset}>
          Reset
        </button>
      </form>
      <ul>
        {items.map((item) => (
          <>
            <li>{item}</li>
            <button type="click" onClick={handleRemove}>
              Remove
            </button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default TodoList4;
