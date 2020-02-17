import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {format, parseISO} from 'date-fns';
import {ptBR} from 'date-fns/locale';

import {
  Container,
  Header,
  Switcher,
  DocumentView,
  CardFront,
  Name,
  CardBack,
  CardView,
  Label,
  Span,
} from './styles';

import cardFront from '../../../assets/images/documents/carteirinha-frente.png';
import cardBack from '../../../assets/images/documents/carteirinha-verso.png';

export default function Document({navigation}) {
  const profile = useSelector(state => state.user.profile);

  const dateBorn = format(parseISO(profile.data_nascimento), 'dd/MM/yyyy', {
    locale: ptBR,
  });
  const dateFormated = format(
    parseISO(profile.data_inicio_cobertura),
    'dd/MM/yyyy',
    {
      locale: ptBR,
    },
  );

  const [switcher, setSwitcher] = useState(false);

  useEffect(() => {
    Orientation.lockToLandscape();

    return () => Orientation.lockToPortrait();
  }, []);

  return (
    <Container>
      <Header>
        <Switcher onPress={() => navigation.goBack()}>
          <Icon name="window-close" size={36} color="#fff" />
        </Switcher>
        <Switcher onPress={() => setSwitcher(!switcher)}>
          <Icon name="sync" size={36} color="#fff" />
        </Switcher>
      </Header>
      <DocumentView>
        {!switcher ? (
          <CardFront source={cardFront}>
            <Name>{profile.nome}</Name>
          </CardFront>
        ) : (
          <CardBack source={cardBack}>
            <CardView>
              <Label>BENEFICIÁRIO</Label>
              <Span>{profile.nome_titular}</Span>

              <Label>CPF</Label>
              <Span>{profile.cpf}</Span>

              <Label>PARCEIRO</Label>
              <Span>REDE + SAÚDE</Span>
            </CardView>
            <CardView>
              <Label>DATA DE NASCIMENTO</Label>
              <Span>{dateBorn}</Span>

              <Label>DATA DE INCULSÃO</Label>
              <Span>{dateFormated}</Span>
            </CardView>
          </CardBack>
        )}
      </DocumentView>
    </Container>
  );
}

Document.navigationOptions = {
  headerTransparent: true,
  headerLeft: false,
};
