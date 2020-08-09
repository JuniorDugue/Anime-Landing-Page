import React from "react";
import useSWR from "swr";
import "./App.css";

const API_URL = "https://kitsu.io/api/edge/trending/anime";

function App() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(API_URL, fetcher);
  // console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);

  return (
    <div className="App">
      <h1>Anime Landing Page</h1>
      <div>
        {data.data.map(anime => {
          return (
            <h2>{anime.attributes.canonicalTitle}</h2>
          )
        })}
      </div>
    </div>
  );
}

export default App;
