import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Artist } from "../ui/Artist";
import artist from "../../artists.json";

const Lineup = () => {
  return (
    <section id="lineup">
      <div id="lineup__container">
        {artist.map((artist) => (
          <Artist
            name={artist.name}
            country={artist.country}
            nickname={artist.nickname}
          ></Artist>
        ))}
      </div>
    </section>
  );
};

export default Lineup;
