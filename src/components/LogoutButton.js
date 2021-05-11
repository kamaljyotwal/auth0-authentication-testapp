import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";

const LogoutButton = ({ children, floated }) => {
  const { logout } = useAuth0();
  return (
    <Button floated={floated} onClick={() => logout({ returnTo: window.location.origin })}>
      {children}
    </Button>
  );
};

export default LogoutButton;
