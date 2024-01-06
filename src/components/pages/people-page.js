import React from "react";
import { useNavigate } from "react-router-dom";
import { PersonList, PersonDetails } from "../sw-components";
import Row from "../row";
import { withRouter } from "../hoc-helpers";

const PeoplePage = (props) => {
  const navigate = useNavigate();
  const { id } = props.params;
  return (
    <Row
      left={
        <PersonList
          onItemSelected={(itemId) => {
            navigate(`/people/${itemId}`);
          }}
        />
      }
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default withRouter(PeoplePage);
