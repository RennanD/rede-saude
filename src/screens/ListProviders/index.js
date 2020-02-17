import React, { useEffect, useState } from "react";

import { Container, ItemList, Label, Select } from "./styles";

export default function ListProviders({ navigation }) {
  const data = navigation.getParam("data");

  return (
    <Container>
      {data.map(provider => (
        <ItemList onPress={() => navigation.navigate("Details", { provider })}>
          <Label>{provider.prestador}</Label>
          <Select>{provider.central_atendimento}</Select>
          <Select>
            {provider.cidade} - {provider.uf}
          </Select>
          <Select>{provider.especialidade}</Select>
        </ItemList>
      ))}
    </Container>
  );
}

ListProviders.navigationOptions = {
  headerTitle: "Prestadores de serviço"
};
