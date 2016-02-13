/**
 *  Class: KeyboardSpacer
 *  Author: Niu Xiaoyu
 *  Date: 16/2/13.
 *  Description:
 */
import React from 'react-native';

const {
  DeviceEventEmitter,
  LayoutAnimation,
  View
  } = React;

// From: https://medium.com/man-moon/writing-modern-react-native-ui-e317ff956f02
const animations = {
  layout: {
    spring: {
      duration: 500,
      create: {
        duration: 300,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 200
      }
    },
    easeInEaseOut: {
      duration: 300,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY
      },
      update: {
        delay: 100,
        type: LayoutAnimation.Types.easeInEaseOut
      }
    }
  }
};

export default class KeyboardSpacer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      keyboardSpace: 0,
      isKeyboardOpened: false
    };

    this.updateKeyboardSpace = this.updateKeyboardSpace.bind(this);
    this.resetKeyboardSpace = this.resetKeyboardSpace.bind(this);
  }

  componentWillUpdate(props, state) {
    if (state.isKeyboardOpened !== this.state.isKeyboardOpened)
      LayoutAnimation.configureNext(animations.layout.spring);
  }

  updateKeyboardSpace(frames) {
    if (!frames.endCoordinates)
      return;
    this.setState({
      keyboardSpace: frames.endCoordinates.height,
      isKeyboardOpened: true
    });
  }

  resetKeyboardSpace() {
    this.setState({
      keyboardSpace: 0,
      isKeyboardOpened: false
    });
  }

  componentDidMount() {
    this._listeners = [
      DeviceEventEmitter.addListener('keyboardWillShow', this.updateKeyboardSpace),
      DeviceEventEmitter.addListener('keyboardWillHide', this.resetKeyboardSpace)
    ];
  }

  componentWillUnmount() {
    this._listeners.forEach(function(/** EmitterSubscription */listener) {
      listener.remove();
    });
  }

  render() {
    let offsetHeight = 0;
    if(!this.state.isKeyboardOpened) {
      offsetHeight = -500;
    }
    return (
        <View style={[{left: 0, right: 0, bottom: this.state.keyboardSpace + offsetHeight}, this.props.style]}>
          {this.props.children}
        </View>
      );
  }
}
