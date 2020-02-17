import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {decode, encode} from 'base-64';

import createRoutes from './routes';
import {StatusBar} from 'react-native';

export default function App() {
  const signed = useSelector(state => state.user.signed);

  const Routes = createRoutes(signed);

  return (
    <>
      <StatusBar backgroundColor="#be2223" barStyle="light-content" />
      <Routes />
    </>
  );
}
