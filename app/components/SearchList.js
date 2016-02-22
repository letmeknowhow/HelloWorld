/**
 *  Class: SearchList
 *  Author: Niu Xiaoyu
 *  Date: 16/2/18.
 *  Description:
 */
const mockData = [
  {name: '手机', icon: require('../../assets/sampleImage/img1.jpg')},
  {name: '相机/摄像机', icon: require('../../assets/sampleImage/img2.jpg')},
  {name: '电脑及配件', icon: require('../../assets/sampleImage/img3.jpg')},
  {name: '3C数码', icon: require('../../assets/sampleImage/img4.jpg')},
  {name: '女装', icon: require('../../assets/sampleImage/img1.jpg')},
  {name: '男装', icon: require('../../assets/sampleImage/img2.jpg')},
  {name: '鞋包配饰', icon: require('../../assets/sampleImage/img3.jpg')},
  {name: '化妆品', icon: require('../../assets/sampleImage/img4.jpg')},
  {name: '奢侈名品', icon: require('../../assets/sampleImage/img1.jpg')},
  {name: '家居用品', icon: require('../../assets/sampleImage/img2.jpg')},
  {name: '家用电器', icon: require('../../assets/sampleImage/img3.jpg')},
  {name: '母婴用品', icon: require('../../assets/sampleImage/img4.jpg')},
  {name: '宠物', icon: require('../../assets/sampleImage/img1.jpg')},
  {name: '门票及服务', icon: require('../../assets/sampleImage/img2.jpg')},
  {name: '书刊音像', icon: require('../../assets/sampleImage/img3.jpg')},
  {name: '交通工具', icon: require('../../assets/sampleImage/img4.jpg')},
  {name: '珠宝首饰', icon: require('../../assets/sampleImage/img1.jpg')},
  {name: '艺术品', icon: require('../../assets/sampleImage/img2.jpg')},
];
import React from 'react-native';

const { Component, View, Text, Image, StyleSheet } = React;
import Grid from '../baseComponents/Grid';
import Button from '../baseComponents/Button';
const styles = StyleSheet.create(
  {
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
    button: {flex: 1, marginBottom: 0, borderWidth: 0, height: 150},
    img: {
      width: 100,
      height: 100,
    },
  }
);
export default class SearchList extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  gridData() {
    return mockData.map((item, index) => {
      return (
        <Button style={styles.button} key={index}>
          <Image style={styles.img} source={item.icon} />
          <Text style={{marginTop: 10}}>
            {item.name}
          </Text>
        </Button>
      );
    });
  }

  // 渲染
  render() {
    return (
      <Grid column={2} gridLine={true} gridData={this.gridData()} cellHeight={130} scroll={true} />
    );
  }
}

class Thumb extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 2}}>
        <Image style={styles.img} source={this.props.source} />
      </View>
    );
  }
}