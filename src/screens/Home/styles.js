import styled from 'styled-components/native';
import ViewPager from '@react-native-community/viewpager';

export const Header = styled.View`
  padding: 0 20px;
  align-items: center;
  flex-direction: row;
`;

export const HeadImage = styled.ImageBackground`
  justify-content: flex-end;
  flex-direction: row;
  flex: 1;
`;

export const TextView = styled.View`
  flex: 3;
  padding: 7px;
  align-items: center;
  justify-content: flex-end;
`;

export const HeadText = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 18px;
`;

export const HeadLabel = styled.Text`
  color: #be2223;
  font-size: 13px;
`;

export const Profile = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-left: 10px;
`;

export const Container = styled.View`
  flex: 1;
  background: #be2223;
`;

export const SliderShow = styled(ViewPager)`
  height: 200px;
  background: #fff;
`;

export const Icon = styled.Image`
  margin: 5px;
`;

export const IconView = styled.View`
  border: 2px solid #eee;
  border-radius: 4px;
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.View`
  flex: 3;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Option = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
  border-radius: 10px;
  height: 100px;
  width: 120px;
  margin: 20px 0;
`;

export const Label = styled.Text`
  color: #fff;
  margin-top: 7px;
  font-size: 11px;
`;

export const Logout = styled.TouchableOpacity`
  height: 40px;
  background: #fff;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const LogoutText = styled.Text`
  margin-left: 10px;
  color: #9b0103;
  font-size: 14px;
  font-weight: bold;
`;
