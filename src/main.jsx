import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App/App";
import { ActiveLinkProvider } from "./services/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActiveLinkProvider>
      <App />
    </ActiveLinkProvider>
  </React.StrictMode>
);
