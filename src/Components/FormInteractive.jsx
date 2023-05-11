import React, { useState } from "react";
import { Welcome } from "./welcome";

function InteractiveWelcome() {
  const [name, setName] = useState("");
  const handleName = (event) => {
    setName(event.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleName} />
      <Welcome name={name} />
    </>
  );
}

export default InteractiveWelcome;
