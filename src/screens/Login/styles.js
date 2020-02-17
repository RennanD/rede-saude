import styled from "styled-components/native";

import { Platform } from "react-native";

import Input from "../../components/Input";
import Button from "../../components/Button";

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: "padding"
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const Logo = styled.Image``;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;

export const Link = styled.TouchableOpacity`
  align-self: stretch;
  height: 46px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const LinkText = styled.Text`
  font-size: 14px;
  color: #be2223;
  text-align: center;
`;
