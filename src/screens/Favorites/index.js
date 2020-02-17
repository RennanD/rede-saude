import React from "react";

import { Container, Empty } from "./styles";

export default function Favorites() {
  return (
    <Container>
      <Empty>Ops, ainda não há nada aqui.</Empty>
    </Container>
  );
}

Favorites.navigationOptions = {
  title: "Favoritos"
};
