import React, { useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { singInRequest } from "../../store/modules/user/actions";

import {
  Container,
  Form,
  Background,
  Logo,
  FormInput,
  SubmitButton,
  Link,
  LinkText
} from "./styles";

import background from "../../../assets/images/background-login.jpg";
import logo from "../../../assets/images/logo/logo-vermelho.png";

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  async function handleLogin() {
    dispatch(singInRequest(username, password));
  }

  return (
    <Background source={background}>
      <Container>
        <Logo source={logo} />
        <Form>
          <FormInput
            label="CPF"
            icon="person-outline"
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            value={username}
            onChangeText={setUsername}
            placeholder="Digite seu CPF"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            label="Senha"
            icon="lock-outline"
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            ref={passwordRef}
            onSubmitEditing={handleLogin}
          />
          <SubmitButton loading={loading} onPress={handleLogin}>
            Entrar
          </SubmitButton>
          <Link onPress={() => {}}>
            <LinkText>Esqueci minha senha</LinkText>
          </Link>
        </Form>
      </Container>
    </Background>
  );
}
