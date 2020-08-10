import React from "react";
import { motion } from "framer-motion";

function Header({ data }) {
  let {
    coverImage: { small },
  } = data.data[4].attributes;

  return (
    <div className="header">
      <motion.h1 animate={{ fontSize: 40, color: "orange" }} transition={{ delay: 0.1, type: "spring", stiffness: 320 }}>
        Jr's Anime Landing Page
      </motion.h1>
      <motion.img animate={{ scale: [0, 1] }} transition={{ duration: 0.5 }} className="header-img" src={small} alt="banner" />
    </div>
  );
}

export default Header;
