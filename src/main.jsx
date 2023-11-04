import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./starRating";
import App from "./components/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} /> */}

    <App />
  </React.StrictMode>
);
