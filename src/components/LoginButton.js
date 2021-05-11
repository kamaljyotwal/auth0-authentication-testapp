import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";

const LoginButton = ({ children, floated }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button floated={floated} onClick={() => loginWithRedirect()}>
      {children}
    </Button>
  );
};

export default LoginButton;
