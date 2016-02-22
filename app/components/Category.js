/**
 *  Class: Category
 *  Author: Niu Xiaoyu
 *  Date: 16/2/18.
 *  Description:
 */
const mockData = [
  {name: '手机', icon: require('../../assets/icons/IndustryNews.png')},
  {name: '相机/摄像机', icon: require('../../assets/icons/RankingList.png')},
  {name: '电脑及配件', icon: require('../../assets/icons/MyPerformance.png')},
  {name: '3C数码', icon: require('../../assets/icons/IndustryNews.png'), badge: true},
  {name: '女装', icon: require('../../assets/icons/RankingList.png')},
  {name: '男装', icon: require('../../assets/icons/MyPerformance.png')},
  {name: '鞋包配饰', icon: require('../../assets/icons/WealthNews.png')},
  {name: '化妆品', icon: require('../../assets/icons/Feedback.png')},
  {name: '奢侈名品', icon: require('../../assets/icons/Profile.png')},
  {name: '家居用品', icon: require('../../assets/icons/IndustryNews.png')},
  {name: '家用电器', icon: require('../../assets/icons/RankingList.png'), badge: true},
  {name: '母婴用品', icon: require('../../assets/icons/MyPerformance.png')},
  {name: '宠物', icon: require('../../assets/icons/WealthNews.png')},
  {name: '门票及服务', icon: require('../../assets/icons/Feedback.png')},
  {name: '书刊音像', icon: require('../../assets/icons/Profile.png')},
  {name: '交通工具', icon: require('../../assets/icons/IndustryNews.png')},
  {name: '珠宝首饰', icon: require('../../assets/icons/RankingList.png')},
  {name: '艺术品', icon: require('../../assets/icons/MyPerformance.png')},
  {name: '门票及服务', icon: require('../../assets/icons/Feedback.png')},
  {name: '书刊音像', icon: require('../../assets/icons/Profile.png')},
  {name: '交通工具', icon: require('../../assets/icons/IndustryNews.png')},
  {name: '珠宝首饰', icon: require('../../assets/icons/RankingList.png')},
  {name: '艺术品', icon: require('../../assets/icons/MyPerformance.png')},
];
import React from 'react-native';
import Grid from '../baseComponents/Grid';
import Button from '../baseComponents/Button';
const { Component, View, Text, StyleSheet, Image } = React;
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
    button: {flex: 1, marginBottom: 0, borderWidth: 0}
  }
);
export default class Category extends Component {
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
    const { actions } = this.props;
    return mockData.map(item => {
      return (
        <Button style={styles.button} onPress={actions.routes.searchList()}>
          <Image source={item.icon}>
            { item.badge && (<View style={styles.badge}/>) }
          </Image>
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
      <View style={{flex: 1}}>
        <Grid style={{flex: 1}} column={3} gridLine={true} gridData={this.gridData()} cellHeight={100}  />
      </View>
    );
  }
}