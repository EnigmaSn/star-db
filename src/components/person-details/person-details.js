import React, { Component } from "react";

import "./person-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import PersonView from "./person-view";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
  };

  componentDidMount = () => {
    this.updatePerson();
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  };

  onPersonLoaded = () => {
    this.setState({
      loading: false,
    });
  };

  updatePerson = () => {
    this.setState({ loading: true });
    const { personId } = this.props;

    if (!personId) {
      return;
    }

    this.swapiService.getPerson(personId).then((person) => {
      this.onPersonLoaded(person);
      this.setState({ person });
    });

    console.log(this.state);
  };

  render() {
    if (!this.state.person) {
      return <span>Please, select a person from a list</span>;
    }

    const content = this.state.loading ? (
      <Spinner />
    ) : (
      <PersonView person={this.state.person} />
    );

    return <div className="person-details card">{content}</div>;
  }
}
