/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/5.
 */
'use strict';
import React from 'react-native';
//import GiftedSpinner from 'react-native-gifted-spinner';
import webApi from '../libs/WebAPI';

const { Component, View, Text, Image, StyleSheet, Dimensions } = React;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const bg = require('./../../assets/loading_bg.jpg');
const styles = StyleSheet.create({
  bg: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nestedText: {
    marginLeft: 0,
    marginTop: -300,
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 50,
  }
});

class LoadSpinner extends Component {
  // 默认属性
  static defaultProps = {};
  // 属性类型
  static propTypes = {};
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
    webApi.actions = props.actions;
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.actions.getSessionToken();
    }, 1500);
  }

  // 渲染
  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={styles.bg} source={bg} >
          <Text style={styles.nestedText}>Hello World</Text>
        </Image>

      </View>
    );
  }
}
export default LoadSpinner;
