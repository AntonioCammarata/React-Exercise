import { useGithubUser } from "./GitHubUserHook";

function GithubUserHook(props) {
  const { data, loading, error, onFetchUser } = useGithubUser(props.username);

  function userDataHandle() {
    onFetchUser(props.username);
  }

  return (
    <>
      <button onClick={userDataHandle}>Carica</button>
      {data && (
        <div>
          {loading && <h1>Loading...</h1>}
          {error && <h1>Error</h1>}
          <h1>{data.name}</h1>
          <p>{data.login}</p>
        </div>
      )}
    </>
  );
}

export default GithubUserHook;
