import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { withRouter } from "../hoc-helpers";

const SecretPage = (props) => {
  const navigate = useNavigate();
  const { isLoggedIn } = props;

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/login", { replace: true });
    }
  }, []);

  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h3>This page is full of secrets!!!</h3>
      </div>
    );
  }
};

export default withRouter(SecretPage);
