/**
 *  Class: Footer
 *  Author: Niu Xiaoyu
 *  Date: 16/2/11.
 *  Description:
 */
import React from 'react-native';

const { Component, View, Text, StyleSheet, Image, TouchableOpacity } = React;
import CustomActionSheet from 'react-native-custom-action-sheet';
const WeChat = require('react-native-wechat');

const message = require('../../../assets/icons/message.png');
const zan = require('../../../assets/icons/zan.png');
const zan_select = require('../../../assets/icons/zan1.png');
const share = require('../../../assets/icons/share.png');
const wechat = require('../../../assets/share/wechat.png');
const timeline = require('../../../assets/share/timeline.png');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  img: {
    width: 25,
    height: 25,
    resizeMode: 'stretch'
  },
  img_share: {
    width: 50,
    height: 50,
    margin: 5,
    resizeMode: 'stretch'
  },
  actionSheetView: {
    backgroundColor: 'white',
    borderBottomColor: '#f3f2f3',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 10
  },
  apps: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
//注册微信API
WeChat.registerApp('1234567');
export default class Footer extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      data: null,
      message: null,
      zan: {
        mine: false,
        count: 0
      }
    };
  }

  toggleModal() {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  componentDidMount() {
    this.setState({
      data: this.props.data,
      message: this.props.message,
      zan: this.props.zan
    });
  }

  componentWillReceiveProps(next) {
    this.setState({
      data: next.data,
      message: next.message,
      zan: next.zan
    });
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <CustomActionSheet
          modalVisible={this.state.modalVisible}
          onCancel={this.toggleModal.bind(this)}
          buttonText="取消"
        >
          <View style={styles.actionSheetView}>
            <TouchableOpacity style={styles.apps} onPress={this._openWXApp.bind(this)}>
              <Image style={styles.img_share} source={wechat}/>
              <Text>微信</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.apps} onPress={this._openTimelineApp.bind(this)}>
              <Image style={styles.img_share} source={timeline}/>
              <Text>朋友圈</Text>
            </TouchableOpacity>
          </View>
        </CustomActionSheet>
        <View style={[styles.container, {height: 40, flex: 3, borderTopWidth: 1, borderColor: '#f3f2f3'}]}>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={this.props.handleMessage}>
            <Image style={styles.img} source={message}/>
            <Text>{this.state.message}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={this.props.handleZan}>
            <Image style={styles.img} source={this.state.zan.mine ? zan_select : zan}/>
            <Text>{this.state.zan.count}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={this.toggleModal.bind(this)}>
            <Image style={styles.img} source={share}/>
            <Text style={{fontSize: 12}}>分享</Text>
          </TouchableOpacity>
        </View>
        <View style={[{flex: 1, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red'}]}>
          <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 16}}>我想要</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  async _openTimelineApp() {
    const shareData = {
      type: 'text',
      description: '分享测试'
    };
    await WeChat.shareToTimeline(shareData);
  }

  async _openWXApp() {
    const shareData = {
      type: 'text',
      description: '分享测试'
    };
    await WeChat.shareToSession(shareData);
  }
}