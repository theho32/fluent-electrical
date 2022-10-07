import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { mergeStyles } from "@fluentui/react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Navigation from "./Navigation/Navigation";
import ScrollToTop from "./scrollToTop";

// Inject some global styles
mergeStyles({
  ":global(body,html,#root)": {
    margin: 0,
    padding: 0,
    height: "100vh",
  },
});

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollToTop />
    <Navigation></Navigation>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
