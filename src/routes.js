import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import SearchProviders from './screens/SearchProviders';
import Favorites from './screens/Favorites';
import ListProviders from './screens/ListProviders';
import Details from './screens/Details';
import Document from './screens/Document';

export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login,
        App: createStackNavigator(
          {
            Home,
            Profile,
            ListProviders,
            Details,
            Document,
            Providers: {
              screen: createMaterialTopTabNavigator(
                {
                  SearchProviders,
                  Favorites,
                },
                {
                  tabBarOptions: {
                    style: {
                      backgroundColor: '#fff',
                    },
                    activeTintColor: '#be2223',
                    inactiveTintColor: 'rgba(0,0,0,0.3)',
                    indicatorStyle: {
                      backgroundColor: '#be2223',
                    },
                  },
                },
              ),
              navigationOptions: {
                headerTitle: 'Rede Credenciados',
              },
            },
          },
          {
            defaultNavigationOptions: {
              headerStyle: {
                backgroundColor: '#be2223',
                height: 60,
              },
              headerTitle: false,
              headerTintColor: '#fff',
            },
          },
        ),
      },
      {
        initialRouteName: signed ? 'App' : 'Login',
      },
    ),
  );
