/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Search from "./Search";
import Logo from "./Logo";

export default function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo /> {children}
    </nav>
  );
}
