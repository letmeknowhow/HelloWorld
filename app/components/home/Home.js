/**
 *  Class: Home
 *  Author: Niu Xiaoyu
 *  Date: 16/2/3.
 *  Description: 首页
 */
import React from 'react-native';

import Banner from '../../baseComponents/Banner';
import HomeHeader from './Header';
import CommoditySummary from './CommoditySummary';

const { Component, View, StyleSheet, Platform, ScrollView } = React;


const mockData_banner = [
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

const mockData_commoditySummary = [
  {
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
    summary: '酷冷至尊（CoolerMaster） 烈焰枪 红轴 游戏机械键盘 台湾制造 优良血统 紧凑布局'
  },
  {
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

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#dbdee1'
    },
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
      <View style={styles.page}>
        <HomeHeader style={[styles.header, {height: Platform.OS === 'ios' ? 60 : 40}]} />
        <Banner
          style={{height: 140, overflow: 'hidden', marginBottom: 10}}
          source={mockData_banner}
          {...this.props}
        />
        <View style={{flex: 1, marginHorizontal: 3}}>
          <ScrollView
            directionalLockEnabled={true}
            automaticallyAdjustContentInsets={false}
          >
            <CommoditySummary data={mockData_commoditySummary[0]} actions = {this.props.actions}/>
            <CommoditySummary data={mockData_commoditySummary[1]} actions = {this.props.actions}/>
            <CommoditySummary data={mockData_commoditySummary[2]} actions = {this.props.actions}/>
            <CommoditySummary data={mockData_commoditySummary[3]} actions = {this.props.actions}/>
          </ScrollView>
        </View>
      </View>
    );
  }

}
