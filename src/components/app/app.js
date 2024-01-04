import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import Row from "../row/row";

import "./app.css";
import ErrorBoundry from "../error-boundry/error-boundry";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          {planet}

          <div className="row mb2 button-row">
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}
            >
              Toggle Random Planet
            </button>
            <ErrorButton />
          </div>

          <PeoplePage />
        </div>
      </ErrorBoundry>
    );
  }
}
