import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { withRouter } from "../hoc-helpers";

const LoginPage = (props) => {
  const navigate = useNavigate();

  const { isLoggedIn, onLogin } = props;

  useEffect(() => {
    if (isLoggedIn) {
      return navigate(`/`, { replace: true });
    }
  });

  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default withRouter(LoginPage);
