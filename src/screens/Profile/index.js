import React from "react";

import { useSelector } from "react-redux";

import {
  Container,
  Footer,
  TextButton,
  Logo,
  Label,
  Header,
  Body,
  GoBackButton,
  Content,
  Description,
  Info,
  Title,
  Name
} from "./styles";

import logo from "../../../assets/images/logo/logo-vermelho.png";

export default function Profile({ navigation }) {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>
      <Info>
        <Title>Bem vindo(a)!</Title>
        <Name>{profile.nome}</Name>
      </Info>
      <Body>
        <Label>Plano</Label>
        <Content>{profile.convenio_tipo_contrato}</Content>

        <Label>Documentos</Label>
        <Content>CPF: {profile.cpf}</Content>

        <Label>Endereço</Label>
        <Content>{profile.endereco}</Content>

        <Label>Bairro</Label>
        <Content>{profile.bairro}</Content>

        <Label>Cidade / Estado</Label>
        <Content>
          {profile.cidade}/ {profile.estado}
        </Content>

        <Label>CEP</Label>
        <Content>{profile.cep}</Content>

        <Description>
          Para qualquer alteração cadastral, ligue para nossa Central de
          Atendimento no:
        </Description>
        <Description>0800</Description>
      </Body>
      <GoBackButton onPress={() => navigation.goBack()}>
        <TextButton>Voltar</TextButton>
      </GoBackButton>
    </Container>
  );
}

Profile.navigationOptions = {
  headerTransparent: true,
  headerLeft: false
};
