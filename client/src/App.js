import React from "react";
import useSWR from "swr";
import "./App.scss";

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
      <div className="card-container">
        {data.data.map((anime) => {
          let {
            canonicalTitle,
            averageRating,
            synopsis,
            posterImage: { medium },
          } = anime.attributes;
          return (
            <div key={anime.id}>
              <img className="card-poster" src={medium} alt="poster" />
              <h2 className="card-title">{canonicalTitle}</h2>
              <p className="card-description">{synopsis.substring(0, 150)}....</p>
              <p className="card-rating">{averageRating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
