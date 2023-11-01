/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import WatchedMovie from "./WatchedMovie";

export default function WatchedMoviesList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
