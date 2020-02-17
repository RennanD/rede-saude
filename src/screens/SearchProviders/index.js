import React, { useState } from "react";

import {
  Container,
  ItemList,
  Label,
  Content,
  TextButton,
  GoBackButton,
  ModalSelect,
  ModalContent,
  Select,
  ListRegions
} from "./styles";

import Input from "../../components/Input";
import rangeRegions from "../../utils/regions";

export default function SearchProviders({ navigation }) {
  const [isVisiblePlane, setVisiblePlane] = useState(false);
  const [isVisibleRegion, setVisibleRegion] = useState(false);
  const [isVisibleCity, setVisibleCity] = useState(false);
  const [isVisibleExp, setVisibleExp] = useState(false);
  const [isVisibleName, setVisibleName] = useState(false);

  const [plane, setPlane] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [exp, setExp] = useState("");

  const [loading, setLoading] = useState(false);

  function handleChangePlane(p) {
    setPlane(p);
    setVisiblePlane(!isVisiblePlane);
  }

  function handleChangeRegion(p) {
    setRegion(p);
    setVisibleRegion(!isVisibleRegion);
  }

  async function handleLoadProviders() {
    setLoading(true);
    const response = await fetch(
      "https://apex.oracle.com/pls/apex/binariuz/rms/api/prestador",
      {
        headers: {
          uf: region,
          cidade: `%${city}%`,
          especialidade: `%${exp}%`,
          cep: "%"
        }
      }
    );

    const jsonResponse = await response.json();

    setLoading(false);

    navigation.navigate("ListProviders", { data: jsonResponse.items });
  }

  return (
    <Container>
      <Content>
        <ItemList onPress={() => setVisiblePlane(!isVisiblePlane)}>
          <Label>Plano</Label>
          <Select>{plane}</Select>
        </ItemList>

        <ItemList onPress={() => setVisibleRegion(!isVisibleRegion)}>
          <Label>Região da busca</Label>
          <Select>{region}</Select>
        </ItemList>

        <ItemList onPress={() => setVisibleCity(!isVisibleCity)}>
          <Label>Cidade da busca</Label>
          <Select>{city}</Select>
        </ItemList>

        <ItemList onPress={() => setVisibleExp(!isVisibleExp)}>
          <Label>Especialidade</Label>
          <Select>{exp}</Select>
        </ItemList>

        <ItemList onPress={() => setVisibleName(!isVisibleName)}>
          <Label>Nome do Prestador - Opcional</Label>
        </ItemList>
      </Content>

      <GoBackButton loading={loading} onPress={handleLoadProviders}>
        Pesquisar
      </GoBackButton>

      {/* Modais */}
      <ModalSelect isVisible={isVisiblePlane}>
        <ModalContent>
          <ItemList onPress={() => handleChangePlane("REDE MAIS SAÚDE")}>
            <Label>REDE MAIS SAÚDE</Label>
          </ItemList>
          <GoBackButton onPress={() => setVisiblePlane(!isVisiblePlane)}>
            Cancelar
          </GoBackButton>
        </ModalContent>
      </ModalSelect>

      <ModalSelect isVisible={isVisibleRegion}>
        <ModalContent>
          <ListRegions>
            {rangeRegions.map(region => (
              <ItemList
                key={region.UF}
                onPress={() => handleChangeRegion(region.UF)}
              >
                <Label>{region.title}</Label>
              </ItemList>
            ))}
          </ListRegions>
          <GoBackButton onPress={() => setVisibleRegion(!isVisibleRegion)}>
            Cancelar
          </GoBackButton>
        </ModalContent>
      </ModalSelect>

      <ModalSelect isVisible={isVisibleCity}>
        <ModalContent>
          <Input icon="location-on" onChangeText={setCity} value={city} />
          <GoBackButton onPress={() => setVisibleCity(!isVisibleCity)}>
            Confirmar
          </GoBackButton>
        </ModalContent>
      </ModalSelect>

      <ModalSelect isVisible={isVisibleExp}>
        <ModalContent>
          <Input
            icon="clipboard-alert-outline"
            onChangeText={setExp}
            value={exp}
          />
          <GoBackButton onPress={() => setVisibleExp(!isVisibleExp)}>
            Confirmar
          </GoBackButton>
        </ModalContent>
      </ModalSelect>
    </Container>
  );
}

SearchProviders.navigationOptions = {
  title: "Buscar"
};
