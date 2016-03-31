import React from 'react-native';
//import AppContainer from './app/containers/index';
import Application from './app/containers/app';
const { AppRegistry, Platform, StatusBar } = React;
//noinspection JSCheckFunctionSignatures
if (Platform.OS === 'ios') {
  StatusBar.setBarStyle(0);
}
AppRegistry.registerComponent('HelloWorld', () => Application);
