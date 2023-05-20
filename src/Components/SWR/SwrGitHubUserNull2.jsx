import React from "react";
import UseGithubUserSwr1 from "./Swr";

export default function GithubUserSwr1({ username }) {
  const { data } = UseGithubUserSwr1(username);
  return (
    <>
      {data && (
        <div>
          <h2>{data.login}</h2>
          <p>{data.login}</p>
        </div>
      )}
    </>
  );
}
