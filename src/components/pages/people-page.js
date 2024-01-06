import React from "react";
import { useNavigate } from "react-router-dom";
import { PersonList } from "../sw-components";

const PeoplePage = () => {
  const navigate = useNavigate();

  return (
    <PersonList
      onItemSelected={(itemId) => {
        navigate(itemId);
      }}
    />
  );
};

export default PeoplePage;
