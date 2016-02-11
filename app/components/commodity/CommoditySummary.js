/**
 *  Class: CommoditySummary
 *  Author: Niu Xiaoyu
 *  Date: 16/2/5.
 *  Description: 商品简介
 */
import React from 'react-native';

const { Component, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } = React;
const portrait = require('../../../assets/portrait.jpg');
let THUMBS = [
    require('../../../assets/sampleImage/img1.jpg'),
    require('../../../assets/sampleImage/img2.jpg'),
    require('../../../assets/sampleImage/img3.jpg'),
    require('../../../assets/sampleImage/img4.jpg')
];
THUMBS = THUMBS.concat(THUMBS);

const createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

const styles = StyleSheet.create({
  page: {
    height: 210,
    backgroundColor: '#FFF',
    marginBottom: 10
  },
  header: {
    height: 50,
    flexDirection: 'row'
  },
  portrait: {
    margin: 5,
    height: 40,
    width: 40
  },
  imagesContainer: {
    flex: 185
  },
  horizontalScrollView: {
    height: 120,
  },
  img: {
    width: 100,
    height: 100,
  },
  font: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontSize: 12
  },
  price: {
    fontSize: 16,
    color: "red",
    backgroundColor: '#f3f2f3'
  }
});

export default class CommoditySummary extends Component {
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

  // 自定义方法
  handle() {

  }

  // 渲染
  render() {
    const data = this.props.data;
    return (
      <View style={styles.page} onPress={this.props.actions.routes.commodityDetail()}>
        <View style={styles.header}>
          <Image style={styles.portrait} source={data.portrait} />
          <View style={{width: 100, justifyContent: 'center'}}>
            <Text style={styles.font}>{data.publisher}</Text>
            <Text style={styles.font}>{data.publish_time}</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
            <Text style={[styles.font, styles.price]}>{`￥${data.price}`}</Text>
          </View>
        </View>
        <View style={styles.imagesContainer}>
          <ScrollView
            directionalLockEnabled={true}
            automaticallyAdjustContentInsets={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
            horizontal={true}
            style={[styles.horizontalScrollView]}>
            {data.thumbs.concat(data.thumbs).map(createThumbRow)}
          </ScrollView>
        </View>
        <Text style={styles.font}>
          {data.summary.length < 60 ? data.summary : data.summary.substr(0, 57) + '...'}
        </Text>
        <View style={{flexDirection: 'row', borderTopWidth: 1, borderColor: '#f3f2f3', paddingVertical: 3, paddingHorizontal: 10}}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <TouchableOpacity onPress={this.props.actions.routes.commodityDetail(data.id)}>
              <Text style={styles.font}>详细信息</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity onPress={this.leaveMessage.bind(this)}>
              <Text style={styles.font}>留言</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.zan.bind(this)}>
              <Text style={styles.font}>赞</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  leaveMessage() {
    Alert.alert('提示', '为该商品的卖家留言?', [
      {text: '确定'}
    ])
  }

  zan() {
    Alert.alert('提示', '为该商品的点赞?', [
      {text: '确定'}
    ])
  }
}

class Thumb extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <View style={{marginHorizontal: 2}} key={this.props.key}>
        <Image style={styles.img} source={this.props.uri} />
      </View>
    );
  }
}
