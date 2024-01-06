import "./app.css";
import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarshipDetails from "../sw-components/starship-details";
import PlanetDetails from "../sw-components/planet-details";
import PersonDetails from "../sw-components/person-details";

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
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
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Routes>
                <Route path="/" exact element={<h1>Welcome to StarDB</h1>} />
                <Route path="people" element={<PeoplePage />} />
                <Route path="planets" element={<PlanetsPage />} />
                <Route path="starships" exact element={<StarshipsPage />} />
                <Route path="starships/:id" element={<StarshipDetails />} />
                <Route path="planets/:id" element={<PlanetDetails />} />
                <Route path="people/:id" element={<PersonDetails />} />
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
