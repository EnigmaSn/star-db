import React from "react";
import { useNavigate } from "react-router-dom";
import { PlanetList } from "../sw-components";

const PlanetsPage = () => {
  const navigate = useNavigate();

  return (
    <PlanetList
      onItemSelected={(itemId) => {
        navigate(itemId);
      }}
    />
  );
};

export default PlanetsPage;
