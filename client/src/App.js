import React from "react";
import fetcher from "./helpers/fetcher";
import useSWR from "swr";
import "./App.scss";
import AnimeCard from "./components/AnimeCard";
import Header from "./components/Header";

const API_URL = "https://kitsu.io/api/edge/trending/anime";

function App() {
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(API_URL, fetcher);
  // console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  // console.log(data);

  return (
    <div className="App">
      <Header data={data} />
      <AnimeCard data={data} error={error} />
    </div>
  );
}

export default App;
