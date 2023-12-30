import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { createRoot } from "react-dom/client";

// ReactDOM.render(<App />,
//   document.getElementById('root'));
const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App />);
