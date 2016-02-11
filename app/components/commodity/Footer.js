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
    width: 20,
    height: 20,
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
      modalVisible: false
    };
  }

  toggleModal() {
    this.setState({
      modalVisible: !this.state.modalVisible
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
              <Image style={styles.img_share} source={wechat} />
              <Text>微信</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.apps} onPress={this._openTimelineApp.bind(this)}>
              <Image style={styles.img_share} source={timeline} />
              <Text>朋友圈</Text>
            </TouchableOpacity>
          </View>
        </CustomActionSheet>
        <View style={[styles.container, {flex: 3}]}>
          <TouchableOpacity>
            <Image style={styles.img} source={message} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.img} source={zan} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleModal.bind(this)}>
            <Image style={styles.img} source={share} />
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
    await WeChat.openWXApp();
    //await WeChat.shareToTimeline();
  }

  async _openWXApp() {
    //const isWXInstalled = await WeChat.isWXAppInstalled();
    //if(isWXInstalled) {
    //  await WeChat.shareToTimeline(this.props.data);
    //}
    await WeChat.openWXApp();
    //await WeChat.shareToSession(this.props.data);
  }
}