import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import Clarity from "@microsoft/clarity";
import App from "./App";
import store from "./redux/store.js";
import "./index.css";

// Microsoft Clarity
Clarity.init("ujo59gd873");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
