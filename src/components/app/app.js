import "./app.css";
import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage,
} from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Routes>
                <Route path="/" exact element={<h1>Welcome to StarDB</h1>} />
                <Route path="people/:id?" element={<PeoplePage />} />
                <Route path="planets/:id?" element={<PlanetsPage />} />
                <Route path="starships/:id?" element={<StarshipsPage />} />
                <Route
                  path="/login"
                  element={
                    <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                  }
                />
                <Route
                  path="/secret"
                  element={<SecretPage isLoggedIn={isLoggedIn} />}
                />
                <Route
                  path="*"
                  element={<h2>This page was destroyed by Death Star</h2>}
                />
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
