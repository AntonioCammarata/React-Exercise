import { useState } from "react";

function ClickTracker() {
  const [lastClicked, setLastClicked] = useState("");

  const handleButtonClick = (event) => {
    const button = event.target.id;
    setLastClicked(button);
  };

  return (
    <div>
      <h1>Last clicked: {lastClicked}</h1>
      <button id="button1" onClick={handleButtonClick}>
        Button 1
      </button>
      <button id="button2" onClick={handleButtonClick}>
        Button 2
      </button>
      <button id="button3" onClick={handleButtonClick}>
        Button 3
      </button>
    </div>
  );
}
export default ClickTracker;