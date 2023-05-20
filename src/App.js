import CounterClick from "./Components/CounterButton";
import { Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./Components/ShowGitHubUser";
import Login from "./Components/login";
import { Hello } from "./Components/Hello";
import NotFound from "./Components/NotFound";
import RouteGithubUserList from "./Components/RouteGitHub";
import CarDetails from "./Components/CarDetails";
import GithubUserSwr from "./Components/SWR/SwrGithub";
import GithubUserHook from "./Components/CustomHook/GitHubUserHook2";

function App() {
  const car = {
    brand: "Opel",
    model: "Corsa",
    year: 2014,
    color: "gray",
  };
  return (
    <>
      <Link to="/Counter">Counter</Link>
      <br></br>
      <Link to="/users/:username">GitHub</Link>
      <br></br>
      <Link to="Login">Login</Link>
      <br></br>
      <Link to={"/users"}>Add a user and select it</Link>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/Counter" element={<CounterClick />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/users" element={<RouteGithubUserList />} />
      </Routes>
      <GithubUserHook username={"gianmarcotoso"} />
      <CarDetails initialData={car} />
      <GithubUserSwr username={"gianmarcotoso"} />
    </>
  );
}

export default App;
