import React from "react";
import { useNavigate } from "react-router-dom";
import { PlanetList } from "../sw-components";

const PlanetsPage = () => {
  const navigate = useNavigate();

  return (
    <PlanetList
      onItemSelected={(itemId) => {
        const newPath = `/planets/${itemId}`;
        navigate(newPath);
      }}
    />
  );
};

export default PlanetsPage;
