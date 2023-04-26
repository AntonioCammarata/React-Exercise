import { Hello } from "./Hello";
import { Call } from "./call";
import { Sum } from "./sum";
import { Welcome } from "./welcome";
import { WelcomeAge } from "./welcome-2.";
import { Age } from "./Props-Extract message";
import ConditionalRendering from "./ConditionalRendering";

function App() {
  return (
    <>
      <ConditionalRendering name="luca" age={22} />
    </>
  );
}

export default App;
