import React, {forwardRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, TInput, Label} from './styles';

function Input({style, icon, label, ...rest}, ref) {
  return (
    <>
      <Label>{label}</Label>
      <Container style={style}>
        {icon && <Icon name={icon} sizr={20} color="#be2223" />}
        <TInput {...rest} ref={ref} />
      </Container>
    </>
  );
}

export default forwardRef(Input);
