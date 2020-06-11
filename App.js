import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/Pages/Navigation';
const App = () => {

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#01B075" barStyle="light-content" />
      <Navigation />
    </React.Fragment>
  );
};

export default App;