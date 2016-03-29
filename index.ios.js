import React from 'react-native';
import AppContainer from './app/containers/index';
const { AppRegistry, Platform, StatusBar } = React;
//noinspection JSCheckFunctionSignatures
if (Platform.OS === 'ios') {
  StatusBar.setBarStyle(0);
}
AppRegistry.registerComponent('HelloWorld', () => AppContainer);
