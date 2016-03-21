/**
 *  Class: SearchList
 *  Author: Niu Xiaoyu
 *  Date: 16/2/18.
 *  Description:
 */
const MockData = [
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

const { Component, View, Text, Image, StyleSheet, InteractionManager, Dimensions } = React;
import GridView from 'react-native-grid-view';
import Button from '../baseComponents/Button';
const width = Dimensions.get('window').width;
const styles = StyleSheet.create(
  {
    button: {
      borderRadius: 0,
      flex: 1,
      margin: 1,
      borderWidth: 0,
      backgroundColor: '#fff',
      height: width / 2 - 2 * 2
    },
    img: {
      //flex: 1,
      width: width / 2 - 2 * 2,
      height: width / 2 - 2 * 2 - 15,
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
    this.state = {
      dataSource: null,
      loaded: false
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        dataSource: MockData,
        loaded: true
      });
    });
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
    if(!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <GridView
        style={{backgroundColor: '#f3f2f3'}}
        items={this.state.dataSource}
        itemsPerRow={2}
        renderItem={this.renderItem.bind(this)}
      />
    );
  }

  renderItem(item) {
    return (
      <Button style={styles.button} key={item.name}>
        <Image style={styles.img} source={item.icon} />
        <Text style={{marginTop: 5}}>
          {item.name}
        </Text>
      </Button>
    );
  }

  renderLoadingView() {
    return (
      <View>
        <Text>
          Loading...
        </Text>
      </View>
    );
  }
}