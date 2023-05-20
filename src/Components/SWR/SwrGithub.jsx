import React from "react";
import UseGithubUserSwr from "./Swr";

export default function GithubUserSwr({ username }) {
  const { data} = UseGithubUserSwr(username);
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
