import { Route } from "react-router";
import "./App.css";
import { Nav } from "./components/Nav";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import DetailPage from "./components/DetailPage";
import AddActivity from "./components/AddActivity";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/home/:page">
        <HomePage />
      </Route>
      <Route exact path="/country/:id">
        <DetailPage />
      </Route>
      <Route exact path="/search">
        <SearchPage />
      </Route>
      <Route exact path="/add">
        <AddActivity />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
