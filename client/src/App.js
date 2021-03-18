import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/Nav';
import { LandingPage } from './components/LandingPage/LandingPage';
import { HomePage } from './components/HomePage/HomePage';
import { DetailPage } from './components/DetailPage/DetailPage';
import { AddActivity } from './components/AddActivity/AddActivity';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/"><LandingPage></LandingPage> </Route>
          <Route path="/home"><HomePage></HomePage> </Route>
          <Route path="/country/:id"><DetailPage></DetailPage> </Route>
          <Route path="/add"><AddActivity></AddActivity></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
