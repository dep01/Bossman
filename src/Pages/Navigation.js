import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// Splash Screen
import SplashScreen from '../Pages/SplashScreen';


// Auth Screen
import Login from '../Pages/Auth/Login';
import Resgist from '../Pages/Auth/Resgist';
import Owner from '../Pages/Auth/Owner';
import Crew from '../Pages/Auth/Crew';

// App Screen Owner
import HomeOwner from '../Pages/App/Owner/Index'
import AccPengajuan from '../Pages/App/Owner/AccPengajuan'
import ListPengajuan from '../Pages/App/Owner/ListPengajuan'
import HistoryPengajuan from '../Pages/App/Owner/HistoryPengajuan'
// App screen crew
import HomeCrew from '../Pages/App/Crew/Index'
import Barang from '../Pages/App/Crew/Barang'
import Pengajuan from '../Pages/App/Crew/Pengajuan'
const Route = () => {
  return <AppContainer />;
};

export default Route;

const AuthStack = createStackNavigator(
  {
    Login: {screen: Login},
    Register: {screen: Resgist},
    Owner:{screen: Owner},
    Crew:{screen: Crew},
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null,
    },
  },
);
const AppStack = createStackNavigator(
  {
    HomeCrew: {screen: HomeCrew},
    Barang: {screen: Barang},
    History: {screen: HistoryPengajuan},
    Pengajuan: {screen: Pengajuan}
  },
  {
    initialRouteName: 'HomeCrew',
    defaultNavigationOptions: {
      header: null,
    },
  },
);
const AppStackOwner = createStackNavigator(
    {
      HomeOwner: {screen: HomeOwner},
      AccPengajuan: {screen: AccPengajuan},
      ListPengajuan: {screen: ListPengajuan},
      HistoryPengajuan: {screen: HistoryPengajuan},
    },
    {
      initialRouteName: 'HomeOwner',
      defaultNavigationOptions: {
        header: null,
      },
    },
  );
AppStack.navigationOptions = ({navigation}) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === 'Home') {
        tabBarVisible = true;
      } else {
        tabBarVisible = false;
      }
    });
  }
  return {
    tabBarVisible,
  };
};
const SwitchNav = createSwitchNavigator(
  {
    AuthLoading: SplashScreen,
    App: AppStack,
    Auth: AuthStack,
    AppOwner: AppStackOwner
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const AppContainer = createAppContainer(SwitchNav);
