import { useContext } from "react";
import { Languagecontext } from "./CreateContext";

const DisplayLanguage = () => {
  const language = useContext(Languagecontext);
  return <p>{language}</p>;
};

export default DisplayLanguage