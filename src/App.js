import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Crops from "./components/crops";
import CropForm from "./components/cropForm";
import Calendar from "./components/calendar";
import Plot from "./components/plot";
import NotFound from "./components/notFound";
import Home from './components/home';
import NavBar from "./components/navBar";
import "./App.css";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/crops/:name" component={CropForm} />
            <Route path="/crops" component={Crops} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/plot" component={Plot} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
