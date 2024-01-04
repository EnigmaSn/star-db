import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";

import "./people-page.css";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
    hasError: false,
  };

  swapiService = new SwapiService();

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={(item) => {
          return `${item.name} (${item.gender})`;
        }}
      />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <Row left={itemList} right={personDetails} />
      // <div className="row mb2">
      //   <div className="col-md-6">
      //     <ItemList
      //       onItemSelected={this.onPersonSelected}
      //       getData={this.swapiService.getAllPeople}
      //       renderItem={(item) => {
      //         return `${item.name} (${item.gender})`;
      //       }}
      //     />
      //   </div>
      //   <div className="col-md-6">
      //     <PersonDetails personId={this.state.selectedPerson} />
      //   </div>
      // </div>
    );
  }
}
