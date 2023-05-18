import { useState } from "react";
import DisplayLanguage from "./Language/DisplayLanguage";
import ClickCounterEffect from "./Components/SideEffect";
import GithubUserList from "./Components/GitHubUserList";
import CounterEffect from "./Components/SideEffect2";
import { GithubUser } from "./Components/GitHubUser";
import FormHook from "./Components/CustomHook/CustomForm2";
import GitHubUserHook from "./Components/CustomHook/GitHubUserHook2";
import DisplayLanguage2 from "./Language/DisplayLanguageFuntion";
import { Languagecontext } from "./Language/CreateContext";
import CarDetails from "./Components/CarDetails";
function App() {
  return (
    <>
      <Languagecontext.Provider>
        <DisplayLanguage />
      </Languagecontext.Provider>
      <ClickCounterEffect
        onCounterChange={(count) => {
          console.log("The counter value :", count);
        }}
      />
      <GitHubUserHook username={"AntonioCammarata"} />
      <CarDetails brand="Opel" model="Adam" year={2017} color="white" />
    </>
  );
}

export default App;
