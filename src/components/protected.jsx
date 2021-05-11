import React from "react";
import { Container, Divider, Segment, Message } from "semantic-ui-react";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

const mystyle1 = {
  border: "1px solid #eee",
  height: "100vh",
};
const mystyle2 = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function Protected() {
  return (
    <Container style={mystyle1}>
      <Segment textAlign="center" inverted>
        Protected Route
      </Segment>
      <Container>
        <Container style={mystyle2}>
          <p>
            <strong> The login data will be shown here </strong>
          </p>
          <LogoutButton floated="right">logout</LogoutButton>
        </Container>
        <Divider />
        <Message>
          <Message.Header>Details Title</Message.Header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tenetur eius voluptatem
            velit laudantium esse aliquam incidunt in, pariatur cum recusandae voluptate tempora
            omnis sint ipsum culpa ea molestias corporis praesentium porro! Dolore minima aspernatur
            porro reprehenderit, quidem delectus quae explicabo. Repellat autem nisi fugit aut cum,
            unde nobis fuga voluptatum rem nulla eligendi reprehenderit voluptates ipsam est
            repudiandae vel quisqscipit sequi error adipisci voluptates! Aliquam, dolor.
          </p>
          <Profile />
        </Message>
      </Container>
    </Container>
  );
}
