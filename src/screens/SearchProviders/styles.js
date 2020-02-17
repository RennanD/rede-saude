import { Platform } from "react-native";

import styled from "styled-components/native";
import Button from "../../components/Button";
import Modal from "react-native-modal";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const ItemList = styled.TouchableOpacity`
  height: 70px;

  padding: 15px;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 15px;
  color: #be2223;
  font-weight: bold;
`;

export const Select = styled.Text`
  font-size: 13px;
  color: #333;
`;

export const GoBackButton = styled(Button)`
  margin: 15px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const ModalSelect = styled(Modal)`
  bottom: 0;
  border-radius: 4px;
  margin: 0;
  justify-content: flex-end;
`;

export const ModalContent = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === "ios" ? true : false,
  behaivor: "padding"
})`
  background: #fff;
  padding: 20px;
`;

export const ListRegions = styled.ScrollView`
  padding: 0 10px;
`;
