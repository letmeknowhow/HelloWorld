/**
 *  Class: CommodityDetail
 *  Author: Niu Xiaoyu
 *  Date: 16/2/5.
 *  Description: 商品详情
 */
import React from 'react-native';

const mockData_commoditySummary = [
  {
    id: '1',
    portrait: require('../../../assets/portrait.jpg'),
    thumbs: [
      require('../../../assets/sampleImage/img1.jpg'),
      require('../../../assets/sampleImage/img2.jpg'),
      require('../../../assets/sampleImage/img3.jpg'),
      require('../../../assets/sampleImage/img4.jpg')
    ],
    publisher: '张三',
    publish_time: '2016-1-2',
    price: '410',
    summary: '酷冷至尊（CoolerMaster） 烈焰枪 红轴 游戏机械键盘 台湾制造 优良血统 紧凑布局;酷冷至尊（CoolerMaster） 烈焰枪 红轴 游戏机械键盘 台湾制造 优良血统 紧凑布局'
  },
  {
    id: '2',
    portrait: require('../../../assets/portrait.jpg'),
    thumbs: [
      require('../../../assets/sampleImage/img1.jpg'),
      require('../../../assets/sampleImage/img2.jpg'),
      require('../../../assets/sampleImage/img3.jpg'),
      require('../../../assets/sampleImage/img4.jpg')
    ],
    publisher: '李四',
    publish_time: '2015-11-2',
    price: '900',
    summary: '苏泊尔（SUPOR）32cm二代火红点不粘无油烟炒锅炒菜锅明火电磁炉通'
  },
  {
    id: '3',
    portrait: require('../../../assets/portrait.jpg'),
    thumbs: [
      require('../../../assets/sampleImage/img1.jpg'),
      require('../../../assets/sampleImage/img2.jpg'),
      require('../../../assets/sampleImage/img3.jpg'),
      require('../../../assets/sampleImage/img4.jpg')
    ],
    publisher: '王五',
    publish_time: '2016-1-5',
    price: '50',
    summary: '双立人锅具刀具12件套装 铸铁炖锅 煎锅蒸锅炊具 不锈钢色 锅具套装'
  },
  {
    id: '4',
    portrait: require('../../../assets/portrait.jpg'),
    thumbs: [
      require('../../../assets/sampleImage/img1.jpg'),
      require('../../../assets/sampleImage/img2.jpg'),
      require('../../../assets/sampleImage/img3.jpg'),
      require('../../../assets/sampleImage/img4.jpg')
    ],
    publisher: '赵六',
    publish_time: '2016-2-2',
    price: '110',
    summary: '中兴 Blade A1(C880A) 16G 灵动白 全网通'
  }
];

const mockData_message = [
  {
    id: '0',
    portrait: require('../../../assets/portrait.jpg'),
    publisher: '赵六',
    publish_time: '2016-2-2',
    message: '哪儿买的?有发票吗'
  },
  {
    id: '1',
    portrait: require('../../../assets/portrait.jpg'),
    publisher: '赵四',
    publish_time: '2016-2-2',
    message: '这么便宜,我要不是有同款的,我就买了'
  },
  {
    id: '2',
    portrait: require('../../../assets/portrait.jpg'),
    publisher: '王五',
    publish_time: '2016-2-2',
    message: '有点灰,但是键盘是好的'
  },
  {
    id: '3',
    portrait: require('../../../assets/portrait.jpg'),
    publisher: '张三',
    publish_time: '2016-2-2',
    message: '有无丑轴,连击,暗病啥的'
  },
];

const { Component, View, Text, StyleSheet, Image, ScrollView, Dimensions } = React;
import Footer from './Footer';
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  footer: {
    height: 50,
    flexDirection: 'row'
  },
  portrait: {
    margin: 5,
    height: 40,
    width: 40
  },
  pic: {
    height: 300,
    width: width - 20,
    resizeMode: 'cover',
    marginVertical: 3
  },
  font: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontSize: 12
  },
  priceContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#f3f2f3',
    paddingLeft: 15,
  },
  price: {
    fontSize: 16,
    color: "red",
  },
  contentText: {
    color: '#666',
    lineHeight: 20
  }
});
export default class CommodityDetail extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      detail: null
    };
  }

  componentDidMount() {
    let ind = parseInt(this.props.routerData.data, 10);
    if(ind) {
      ind -= 1;
      this.setState({
        detail: mockData_commoditySummary[ind]
      });
    }
  }

  // 渲染
  render() {
    const data = this.state.detail;
    if(data) {
      const imgs = data.thumbs.map((item, index) => {
        return (<Image key={index} style={[styles.pic]} resizeMode="contain" source={item}/>);
      });
      return (
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <ScrollView>
              <View style={styles.footer}>
                <Image style={styles.portrait} source={data.portrait} />
                <View style={{width: 100, justifyContent: 'center'}}>
                  <Text style={styles.font}>{data.publisher}</Text>
                  <Text style={styles.font}>{data.publish_time}</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                  <Text style={[styles.font, styles.price]}>{`￥${data.price}`}</Text>
                </View>
              </View>
              <View style={styles.priceContainer}>
                <Text style={[styles.font, styles.price]}>{`￥${data.price}`}</Text>
              </View>
              <Text style={[styles.font, {marginVertical: 10}]}>
                {data.summary}
              </Text>
              <View style={{width: width - 10}}>
                {imgs}
              </View>
              {this._renderMessages()}
            </ScrollView>
          </View>
          <Footer style={{height: 40}} data={{thumbImage: data.thumbs[0], type: 'image',imageUrl: '../../../assets/sampleImage/img1.jpg'}} />
        </View>
      );
    } else {
      return (
        <Text style={styles.contentText}>无信息</Text>
      );
    }
  }

  _renderMessages() {
    const messages = mockData_message.map((item, index) => {
      return (
        <View key={index} style={{flexDirection: 'row', paddingVertical: 10, borderTopWidth: 1, borderColor: '#f3f2f3'}}>
          <View style={{width: 35}}>
            <Image style={{width: 30, height: 30}} source={item.portrait} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.font}>{item.publisher}</Text>
            <Text style={styles.font}>{item.message}</Text>
          </View>
          <View style={{width: 100, alignItems: 'flex-end'}}>
            <Text style={styles.font}>{item.publish_time}</Text>
          </View>
        </View>
      );
    });
    if(mockData_message.length > 0) {
      return (
        <View>
          <View style={{height: 8, backgroundColor: '#f3f2f3', marginTop: 7}} />
          <View>
            {messages}
          </View>
        </View>
      );
    }
  }
}