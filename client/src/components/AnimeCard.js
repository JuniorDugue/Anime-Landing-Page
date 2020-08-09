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
            <motion.img 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.9 }}
            className="card-poster" src={medium} alt="poster" />
            <motion.h2 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.9 }}
            className="card-title">{canonicalTitle}</motion.h2>
            <motion.p 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.9 }}
            className="card-description">{synopsis.substring(0, 150)}....</motion.p>
            <motion.p 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.9 }}
            className="card-rating">{averageRating}</motion.p>
          </div>
        );
      })}
    </div>
  );
}

export default AnimeCard;
