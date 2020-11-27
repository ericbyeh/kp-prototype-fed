import React from "react";

import "./App.scss";

import { AppHeader, AppBody, AppFooter } from "./components";

const App = () => {
  // Context allows sharing of data that can be considered “global” for a tree of React components
  return (
    <div>
      <AppHeader/>
      <AppBody/>
      <AppFooter/>
    </div>
  );
};

export default App;
