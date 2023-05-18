import { Languagecontext } from "./CreateContext";

const DisplayLanguage = () => {
  return (
    <Languagecontext.Consumer>
      {(language) => <h1>{language}</h1>}
    </Languagecontext.Consumer>
  );
};

export default DisplayLanguage;
