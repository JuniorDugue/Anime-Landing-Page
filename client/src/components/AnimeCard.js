import React from "react";
import { motion } from "framer-motion";

function AnimeCard({ data }) {
  return (
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
            <motion.h2 className="card-title">{canonicalTitle}</motion.h2>
            <motion.p className="card-description">{synopsis.substring(0, 150)}....</motion.p>
            <motion.p className="card-rating">{averageRating}</motion.p>
          </div>
        );
      })}
    </div>
  );
}

export default AnimeCard;
