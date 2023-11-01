/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
