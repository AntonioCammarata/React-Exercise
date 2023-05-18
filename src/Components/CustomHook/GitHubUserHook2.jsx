import React from "react";
import useGitHubUser from "./GitHubUserHook";

const GitHubUserHook = ({ username }) => {
  const { data, loading, error } = useGitHubUser({ username });

  if (loading) {
    return "loading";
  }
  if (error) {
    return "error";
  }
  if (!data) {
    return "no data found";
  }
  try {
    return (
      <div>
        <h2>{data.name}</h2>
      </div>
    );
  } catch (error) {
    return "Error";
  }
};
export default GitHubUserHook;
