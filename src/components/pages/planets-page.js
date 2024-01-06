import React from "react";
import { useNavigate } from "react-router-dom";
import { PlanetList, PlanetDetails } from "../sw-components";
import Row from "../row";
import { withRouter } from "../hoc-helpers";

const PlanetsPage = (props) => {
  const navigate = useNavigate();
  const { id } = props.params;

  return (
    <Row
      left={
        <PlanetList
          onItemSelected={(itemId) => {
            navigate(`/planets/${itemId}`);
          }}
        />
      }
      right={<PlanetDetails itemId={id} />}
    />
  );
};

export default withRouter(PlanetsPage);
