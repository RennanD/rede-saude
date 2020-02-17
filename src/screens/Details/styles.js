import styled from "styled-components/native";

import MapView from "react-native-maps";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 120px;
  justify-content: center;
  padding: 30px;
  border: 1px solid #ddd;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #be2223;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const Options = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 20px;
`;

export const Action = styled.TouchableOpacity`
  height: 70px;
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const MapHeader = styled(MapView)`
  flex: 1;
  background: #ddd;
`;
