/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

export default function Mainn({ children }) {
  return <main className="main">{children}</main>;
}
