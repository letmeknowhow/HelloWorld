import React from 'react-native';
import AppContainer from './app/containers/index';
const { AppRegistry, Platform, StatusBarIOS } = React;
//noinspection JSCheckFunctionSignatures
if (Platform.OS === 'ios') {
  StatusBarIOS.setStyle(0);
}
AppRegistry.registerComponent('HelloWorld', () => AppContainer);
