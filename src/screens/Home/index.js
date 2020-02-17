import React from 'react';
import {useDispatch} from 'react-redux';

import {TouchableOpacity, FlatList, Linking} from 'react-native';

import {
  Container,
  SliderShow,
  Row,
  Option,
  Menu,
  Label,
  Icon,
  Logout,
  LogoutText,
  Header,
  IconView,
  HeadImage,
  HeadText,
  HeadLabel,
  TextView,
  Profile,
} from './styles';

import ProfileHeader from '../../components/ProfileHeader';

import head from '../../../assets/images/promo.png';
import head2 from '../../../assets/images/welcome.png';

import sair from '../../../assets/images/icons/sair.png';

import credenciados from '../../../assets/images/icons/credenciados.png';
import carteirinha from '../../../assets/images/icons/carteirinha.png';
import manuais from '../../../assets/images/icons/manuais.png';
import noticias from '../../../assets/images/icons/noticias.png';
import prescricoes from '../../../assets/images/icons/prescricoes.png';
import contatos from '../../../assets/images/icons/contatos.png';
import mensagem from '../../../assets/images/icons/mensagem.png';
import {singOut} from '../../store/modules/user/actions';

const slide = [
  {
    id: '1',
    title: 'Encontre médicos, clínicas e farmácias.',
    label: 'Faça uma busca mais próxima de onde você estiver',
    image: head,
  },
  {
    id: '2',
    title: 'Encontre médicos, clínicas e farmácias.',
    label: 'Faça uma busca mais próxima de onde você estiver',
    image: head2,
  },
];

export default function Home({navigation}) {
  const dispatch = useDispatch();

  return (
    <Container>
      <HeadImage source={head2}>
        <TextView>
          <HeadText>Encontre médicos, clínicas e farmácias.</HeadText>
          <HeadLabel>
            Faça uma busca mais próxima de onde você estiver
          </HeadLabel>
        </TextView>
      </HeadImage>

      <Menu>
        <Row>
          <Option onPress={() => navigation.navigate('Providers')}>
            <IconView>
              <Icon source={credenciados} />
            </IconView>
            <Label>Redes credenciadas</Label>
          </Option>

          <Option onPress={() => navigation.navigate('Document')}>
            <IconView>
              <Icon source={carteirinha} />
            </IconView>
            <Label>Carteirinha virtual</Label>
          </Option>

          <Option
            onPress={() => {
              Linking.openURL('tel:08007766013');
            }}>
            <IconView>
              <Icon source={contatos} />
            </IconView>
            <Label>Contatos</Label>
          </Option>
        </Row>
      </Menu>
      <Logout onPress={() => dispatch(singOut())}>
        <Icon source={sair} />
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
}

Home.navigationOptions = ({navigation}) => ({
  headerLeft: () => <ProfileHeader navigation={navigation} />,
  headerRight: () => (
    <Header>
      <TouchableOpacity>
        <Icon source={mensagem} />
      </TouchableOpacity>
    </Header>
  ),
});
