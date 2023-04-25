import { Hello } from "./Hello";
import { Call } from "./call";
import { Sum } from "./sum";
import { Welcome } from "./welcome";
import { WelcomeAge } from "./welcome-2.";
import { Age } from "./Props-Extract message";

function App() {
  return (
    <>
      <WelcomeAge name=" luca" age={28} />
    </>
  );
}

export default App;
