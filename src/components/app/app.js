import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list/item-list";
import ItemDetails, { Record } from "../item-details/item-details";
// import { Record } from "../item-details/item-view";
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

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllStarships,
      getAllPlanets,
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye color" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="manufacturer" label="Manufacturer" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />

          <ItemList getData={getAllPeople} onItemSelected={() => {}}>
            {({ name }) => <span>{name}</span>}
          </ItemList>

          <ItemList getData={getAllPlanets} onItemSelected={() => {}}>
            {({ name }) => <span>{name}</span>}
          </ItemList>
        </div>
      </ErrorBoundry>
    );
  }
}
