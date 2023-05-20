import useSWR from "swr";
const fetcher = (url) => fetch(url).then((result) => result.json());

export default function UseGithubUserSwr(username) {
  const { data } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );
  return { data };
}
