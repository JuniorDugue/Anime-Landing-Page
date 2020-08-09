import React, { useState, useEffect } from "react";

function Header({ data }) {
  let {
    coverImage: { small },
  } = data.data[4].attributes;

  return (
    <div className="header">
      <h1>Jr's Anime Landing Page</h1>
      <img className="header-img" src={small} alt="banner" />
    </div>
  );
}

export default Header;
