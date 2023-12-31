import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import PlanetView from "./planet-view";

export default class RandomPlanet extends Component {
  constructor() {
    super();
    this.updatePlanet();
  }
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
  };

  onPlanetLoaded(planet) {
    this.setState({ planet, loading: false });
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService.getPlanet(id).then((planet) => {
      console.log(planet);
      this.onPlanetLoaded(planet);
    });
  }

  render() {
    const { planet, loading } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
      </div>
    );
  }
}
