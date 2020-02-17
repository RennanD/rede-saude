import React, {useState, useEffect} from 'react';

import {Linking} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Action,
  Header,
  Options,
  Subtitle,
  Title,
  MapHeader,
} from './styles';

export default function Details({navigation}) {
  const provider = navigation.getParam('provider');
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadMap() {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${provider.cep}&key=AIzaSyDonBd0lJhMRQUtV59IwSI1jzk4n86AJPE`,
      );

      const respJson = await response.json();

      const resultJson = respJson.results.map(
        result => result.geometry.viewport.northeast,
      );

      const [result] = resultJson;

      const {lat, lng} = result;

      setCurrentRegion({
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }

    loadMap();
  }, [provider.cep]);

  return (
    <Container>
      <MapHeader initialRegion={currentRegion} />

      <Header>
        <Title>{provider.prestador}</Title>
        <Subtitle>{provider.bairro}</Subtitle>
        <Subtitle>
          {provider.cidade} - {provider.uf}
        </Subtitle>
        <Subtitle>{provider.especialidade}</Subtitle>
      </Header>
      <Options>
        <Action>
          <Icon name="account-star-outline" size={36} color="#be2223" />
        </Action>
        <Action
          onPress={() => {
            Linking.openURL(`tel:${provider.central_atendimento}`);
          }}>
          <Icon name="phone-in-talk" size={36} color="#be2223" />
        </Action>
      </Options>
    </Container>
  );
}

Details.navigationOptions = {
  headerTitle: 'Detalhes',
};
