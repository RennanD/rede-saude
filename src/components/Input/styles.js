import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  border-radius: 4px;
  border-bottom-width: 2px;
  border-bottom-color: #be2223;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  color: #be2223;
  font-weight: bold;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  flex: 1;
  font-size: 14px;
  margin-left: 10px;
  color: #333;
`;
