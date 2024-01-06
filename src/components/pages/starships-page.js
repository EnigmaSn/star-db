import React from "react";
import { useNavigate } from "react-router-dom";
import Row from "../row";
import { StarshipList, StarshipDetails } from "../sw-components";
import { withRouter } from "../hoc-helpers";

const StarshipsPage = (props) => {
  const navigate = useNavigate();
  const { id } = props.params;

  return (
    <Row
      left={
        <StarshipList
          onItemSelected={(itemId) => {
            navigate(`starships/${itemId}`);
          }}
        />
      }
      right={<StarshipDetails itemId={id} />}
    />
  );
};

export default withRouter(StarshipsPage);
