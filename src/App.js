
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Savedbooks from "./pages/Savedbooks";
import Navbar from "./components/Navbar";
import NoResults from "./pages/NoResults";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/saved" component={Savedbooks}/>
          <Route component={NoResults} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;