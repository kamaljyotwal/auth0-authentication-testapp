import React from "react";
import { Container, Header } from "semantic-ui-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

export default function Main() {
  return (
    <>
      <Container>
        <Header as="h1" textAlign="center" content="The main page" />

        <Container>
          <LogoutButton >logout </LogoutButton>
          <LoginButton>Login </LoginButton>
        </Container>
      </Container>
      <Container>
        <Profile />
      </Container>
    </>
  );
}
