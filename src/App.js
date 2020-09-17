import React from 'react';
import './App.css';
import Home from "./Home"
import Login from "./Login.js"
import Header from "./Header"
import Footer from "./Footer"
import SearchBar from "./SearchBar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/search">
    <SearchBar />   
    </Route>
    <Route path="/">
    <Home />
    </Route>
    </Switch>

     <Footer />
     </Router>
    </div>
  );
}

export default App;
