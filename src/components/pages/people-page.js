import React from "react";
import { useNavigate } from "react-router-dom";
import { PersonList } from "../sw-components";

const PeoplePage = () => {
  const navigate = useNavigate();

  return (
    <PersonList
      onItemSelected={(itemId) => {
        const newPath = `/people/${itemId}`;
        navigate(newPath);
      }}
    />
  );
};

export default PeoplePage;
