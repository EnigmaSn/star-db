import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import PlanetView from "./planet-view";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class RandomPlanet extends Component {
  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 3500);
  }
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false, error: false });
  };
  onError = () => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService
      .getPlanet(id)
      .then((planet) => {
        this.onPlanetLoaded(planet);
      })
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !loading && !error;
    const errorIndicator = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorIndicator}
        {spinner}
        {content}
      </div>
    );
  }
}
