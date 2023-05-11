import React, { useState } from "react";

function TodoList() {
  const [items, setItems] = useState([]);

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItemValue = event.target.itemInput.value;
    setItems([...items, newItemValue]);
  };

  return (
    <div>
      <form onSubmit={handleAddItem}>
        <input type="text" name="itemInput" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
