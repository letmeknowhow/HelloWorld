/**
 *  Class: Home
 *  Author: Niu Xiaoyu
 *  Date: 16/2/3.
 *  Description: 首页
 */
import React from 'react-native';

import Banner from '../../baseComponents/Banner';
import HomeHeader from './Header';

const { Component, View, Text, Image, StyleSheet, Platform } = React;


const mockData = [
  {
    id: '1',
    url: require('../../../assets/banner/1.png')
  },
  {
    id: '2',
    url: require('../../../assets/banner/2.png')
  },
  {
    id: '3',
    url: require('../../../assets/banner/3.png')
  },
  {
    id: '4',
    url: require('../../../assets/banner/4.png')
  }
];

const styles = StyleSheet.create(
  {
    header: {
      backgroundColor: '#ffda44'
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

export default class Home extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View style={{flex: 1}}>
        <HomeHeader style={[styles.header, {height: Platform.OS === 'ios' ? 60 : 40}]} />
        <Banner
          style={{height: 140, overflow: 'hidden'}}
          source={mockData}
          {...this.props}
        />
        <Text>首页</Text>
      </View>
    );
  }

}
