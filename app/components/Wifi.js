/**
 *  Class: Wifi
 *  Author: Niu Xiaoyu
 *  Date: 16/2/3.
 *  Description: Wifi
 */
import React from 'react-native';

const { Component, View, StyleSheet, Text } = React;


const styles = StyleSheet.create(
  {
    page: {
      flex: 1
    }
  }
);

class Wifi extends Component {
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
      <View style={styles.page}>
        <Text>Wifi</Text>
      </View>
    );
  }

}

export default Wifi;