import React from "react";
import { useNavigate } from "react-router-dom";
import Row from "../row";
import { StarshipList, StarshipDetails } from "../sw-components";

const StarshipsPage = (props) => {
  const navigate = useNavigate();
  const { id } = props.params;

  return (
    <Row
      left={
        <StarshipList
          onItemSelected={(itemId) => {
            navigate(itemId);
          }}
        />
      }
      right={<StarshipDetails itemId={id} />}
    />
  );
};

export default StarshipsPage;
