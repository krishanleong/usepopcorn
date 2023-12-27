import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {<App />}
    {/* <StarRating maxRating={5} className="test" defaultRating={3} />
    <StarRating maxRating={20} color="blue" size="77" /> */}
  </React.StrictMode>
);
