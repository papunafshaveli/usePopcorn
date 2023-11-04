/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function MovieDetails({ selectedId, onCloseMovie }) {
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
}
