import { Languagecontext } from "./Language/CreateContext";
import { useState } from "react";
import DisplayLanguage from "./Language/DisplayLanguage";
import ClickCounterEffect from "./Components/SideEffect";
import GithubUserList from "./Components/GitHubUserList";
import CounterEffect from "./Components/SideEffect2";
import { GithubUser } from "./Components/GitHubUser";

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
      <GithubUser />
      <ClickCounterEffect
        onCounterChange={(count) => {
          console.log("The counter value :", count);
        }}
      />
    </>
  );
}

export default App;
