/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>❗️</span> {message}
    </p>
  );
}
