// React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Provider
import SettingsProvider from "./contexts/SettingsContext";
import TitleContextProvider from "./contexts/TitleContext";

// CSS
import "nprogress/nprogress.css";

// App
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
      <TitleContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TitleContextProvider>
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
