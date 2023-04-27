import { Hello } from "./Hello";
import { Call } from "./call";
import { Sum } from "./sum";
import { Welcome } from "./welcome";
import { WelcomeAge } from "./welcome-2.";
import { Age } from "./Props-Extract message";
import ConditionalRendering from "./ConditionalRendering";
import ConditionalRenderingIf from "./Conditional Rendering - If prop is present";
import ConditionalRenderingLess from "./Conditional Rendering - If less than `65`";
import { Young } from "./Conditional Rendering - Render the You are very young";
import { Counter } from "./Counter";
import { CounterProps } from "./CounterProps";

function App() {
  return (
    <>
      <CounterProps initialValue={1} incrementBy={2} />
    </>
  );
}

export default App;
