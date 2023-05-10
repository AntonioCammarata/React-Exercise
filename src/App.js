import { Hello } from "./Hello";
import { Call } from "./call";
import { Sum } from "./sum";
import { Welcome } from "./welcome";
import { WelcomeAge } from "./welcome-2.";
import { Age } from "./age";
import ConditionalRendering from "./ConditionalRendering";
import ConditionalRenderingIf from "./Conditional Rendering - If prop is present";
import ConditionalRenderingLess from "./Conditional Rendering - If less than `65`";
import { Young } from "./Conditional Rendering - Render the You are very young";
import { Counter1 } from "./Counter";
import { CounterProps } from "./CounterProps";
import { CounterProps1 } from "./CounterEsercizio2";
import CounterClick from "./CounterButton";
import ClickTracker from "./ClickTraker";
import InteractiveWelcome from "./FormInteractive";
import Login from "./login";
import UncontrolledLogin from "./UncontrolledLogin";
import TodoList from "./ToDo";
import TodoList2 from "./ToDo2";
import TodoList3 from "./Todo3";
import TodoList4 from "./ToDo4";
import { Languagecontext } from "./Language/CreateContext";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("it");
  function handlechange(event) {
    setLanguage(event.target.value);
  }
  return (
    <>
      <select onChange={handlechange} value={language}>
        <option value={"it"}>it</option>
        <option value={"en"}>en</option>
      </select>
      <Languagecontext.Provider value={language}>
        <DisplayLanguage />
      </Languagecontext.Provider>
    </>
  );
}

export default App;
