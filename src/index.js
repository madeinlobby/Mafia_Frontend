import React from "react";
import { render } from "react-dom";
import LoginPage from "./pages/loginPage";

render(
  <React.StrictMode>
    <LoginPage language="en" />
  </React.StrictMode>,
  document.getElementById("root")
);
