import { Hello } from "./Hello";
import { Call } from "./call";
import { Sum } from "./sum";
import { Welcome } from "./welcome";
import { WelcomeAge } from "./welcome-2.";

function App() {
  return (
    <>
      <Hello />
      <Call name=" antonio" />
      <Sum number1={2} number2={5} />
      <Welcome name={<i> John</i>} />
      <WelcomeAge name="Luca" age={22} />
    </>
  );
}

export default App;
