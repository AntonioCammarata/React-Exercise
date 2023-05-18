import { useParams } from "react-router";
import { GithubUser } from "./GitHubUser";

const ShowGithubUser = () => {
  const { username = "AntonioCammarata" } = useParams();
  return (
    <div>
      <GithubUser username={username} />
    </div>
  );
};
export default ShowGithubUser;
