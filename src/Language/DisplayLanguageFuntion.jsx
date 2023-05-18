import React from "react";
import { useContext } from "react";
import { Languagecontext } from "./CreateContext";

const DisplayLanguage2 = () => {
  const language = useContext(Languagecontext);
  return <h1>{language}</h1>;
};

export default DisplayLanguage2;
