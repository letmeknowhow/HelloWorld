/**
 *  Class: Hot
 *  Author: Niu Xiaoyu
 *  Date: 16/2/3.
 *  Description: 围观
 */
import React from 'react-native';

import NaviBar from '../baseComponents/NaviBar';
import HomeHeader from './home/Header';

const { Component, View, Text, Image, StyleSheet, Platform } = React;



const styles = StyleSheet.create(
  {
    header: {
      height: 50,
      backgroundColor: '#FF5400'
    },
    badge: {
      borderRadius: 5,
      borderWidth: 0,
      width: 10,
      height: 10,
      backgroundColor: '#dd2b37',
      position: 'absolute',
      top: 0,
      right: 0
    },
    button: {flex: 1, marginBottom: 0, borderWidth: 0}
  }
);

class Hot extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
  }

  // 渲染
  render() {
    return (
      <View style={{flex: 1}}>
        <HomeHeader style={[styles.header, {paddingTop: Platform.OS === 'ios' ? 20 : 0}]} />
        <Text>围观</Text>
      </View>
    );
  }

}

export default Hot;
