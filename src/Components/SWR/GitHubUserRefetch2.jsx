import { useGithubUserRefetch } from "./GitHubUserRefetch";

function GithubUserRefetch(props) {
  const { data, onFetchData } = useGithubUserRefetch(props.username);

  return (
    <div>
      <button onClick={onFetchData}>Fetch</button>
      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>{data.login}</p>
        </div>
      )}
    </div>
  );
}

export default GithubUserRefetch;
