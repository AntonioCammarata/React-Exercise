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
import Filteredlist from "./Components/UseMemo";
import CounterClick from "./Components/CounterButton";
import { Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./Components/ShowGitHubUser";
import Login from "./Components/login";
import { Hello } from "./Components/Hello";
import NotFound from "./Components/NotFound";

const person = [
  {
    name: "Antonio",
    id: 1,
    age: 22,
  },
  {
    name: "Marco",
    id: 2,
    age: 11,
  },
  {
    name: "Paolo",
    id: 3,
    age: 30,
  },
];
function App() {
  return (
    <>
      {/*  <Languagecontext.Provider>
        <DisplayLanguage />
      </Languagecontext.Provider>
      <ClickCounterEffect
        onCounterChange={(count) => {
          console.log("The counter value :", count);
        }}
      />
      <GitHubUserHook username={"AntonioCammarata"} />
      <Filteredlist list={person} /> */}

      <Link to="/Counter">Counter</Link>
      <br></br>
      <Link to="/users/:username">GitHub</Link>
      <br></br>
      <Link to="Login">Login</Link>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/Counter" element={<CounterClick />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
