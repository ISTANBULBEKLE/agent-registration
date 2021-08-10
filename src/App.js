import "./App.css";
import React from "react";
import TopNavElement from "./Components/TopNavElement";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BusinessName from "./Components/BusinessName";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNavElement />
        <Switch>
          <Route exact path="/businessname" component={BusinessName} />
          <h1>Agent registration </h1>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
