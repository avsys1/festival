import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import artists from "../../artists.json";

const SingleArtist = () => {
  const nickname = useParams().nickname;

  const artist = artists.find((artist) => artist.nickname === nickname);

  return (
    <section id="artist">
      <div id="artist__info">
        <p> {artist.name}</p>
        <p> {artist.nickname}</p>
        <p> {artist.aboutMe}</p>
        <p> {artist.soundcloud}</p>
      </div>
    </section>
  );
};

export default SingleArtist;
