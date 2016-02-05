/**
 * Created by gaoletian on 15/11/25.
 */

import React from 'react-native';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux/native';
import { actions as routerActions, NavBar, Route, Router, Schema, TabBar, TabRoute } from './../libs/react-native-router-redux/index';

const { Component,View, Text, StyleSheet, Platform, BackAndroid, Alert } = React;

import CodePush from 'react-native-code-push';
import Modal from '../baseComponents/ModalBox';

import LoadSpinner from '../components/LoadSpinner';
/** 主tab 四页*/
import Home from '../components/home/Home';
import Publish from '../components/Publish';
import Message from '../components/Message';
import Mine from '../components/Mine';

import CommodityDetail from '../components/CommodityDetail';
//import WeChatTest from '../components/WeChatTest';
import Movie from '../components/Movie';

/** 登陆页*/
import SignIn from '../components/SignIn';
import SignInGesture from '../components/SignInGesture';

import * as authActions from '../reducers/auth/authActions';
import * as wealthMessageActions from '../reducers/wealthMessage/wealthMessageAction';
import _ from 'lodash';


const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    marginBottom: 0,
  }
});

const actions = _.merge(
  routerActions,
  authActions,
  wealthMessageActions
);

const mapStateToProps = state => {
  return {
    router: state.router,
    auth: state.auth,
    wealthMessage: state.wealthMessage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...actions,
    }, dispatch),
    dispatch,
  };
};

const defaultSchema = {
  navBar: NavBar,
  navLeftColor: '#fff', // back button color
  navTint: '#f21b1b',
  navTitleColor: '#FFFFFF',
  navTitleStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
  },
  statusStyle: 'light-content',
  tabBar: TabBar,
};

/** Tab图标 */
const assets = {
  'logo': require('../../assets/logo.png'),
  'home': require('../../assets/icons/Home.png'),
  'publish': require('../../assets/icons/training.png'),
  'message': require('../../assets/icons/Spread.png'),
  'mine': require('../../assets/icons/Customer.png'),
};

let hideNavBar = Platform.OS !== 'ios';
hideNavBar = false;

/**
 * 响应手机的返回键
 */
let _router;
let _actions;

if (Platform.OS === 'android') {
  BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_actions && _router.routes.length !== 1) {
      _actions.pop(); // 回到上一个路由状态      
    } else {
      Alert.alert('提示', '确定要退出应用吗?',
        [
          {text: '取消'},
          {text: '退出', onPress: () => BackAndroid.exitApp()},
        ]
      );
    }
    return true; // 返回true,不退出程序
  });
  
}const {
  LOGGED_IN_STATE,
  LOGGED_OUT_STATE
  } = require('../libs/constants').default;

class Application extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      progress: false
    };
  }

  componentWillMount() {
    _actions = this.props.actions;
    let self = this;
    CodePush.sync(
      {
        updateDialog: {
          title: '升级提醒',
          optionalUpdateMessage: '有一个可用的更新 v10.是否需要安装?',
          optionalInstallButtonLabel: '马上更新',
          optionalIgnoreButtonLabel: '暂不更新'
        },
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      (syncStatus) => {
        switch(syncStatus) {
          case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            self.setState({
              syncMessage: '正在检查更新.'
            });
            break;
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            self.setState({
              syncMessage: '正在下载.'
            });
            this.refs.downloadBox.open();
            break;
          case CodePush.SyncStatus.AWAITING_USER_ACTION:
            self.setState({
              syncMessage: 'Awaiting user action.'
            });
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            self.setState({
              syncMessage: '正在安装.'
            });
            this.refs.downloadBox.close()
            break;
          case CodePush.SyncStatus.UP_TO_DATE:
            self.setState({
              syncMessage: '更新版本号到最新',
              progress: false
            });
            break;
          case CodePush.SyncStatus.UPDATE_IGNORED:
            self.setState({
              syncMessage: 'Update cancelled by user.',
              progress: false
            });
            break;
          case CodePush.SyncStatus.UPDATE_INSTALLED:
            self.setState({
              syncMessage: '更新已经安装,下次重启后应用更新内容',
              progress: false
            });
            break;
          case CodePush.SyncStatus.UNKNOWN_ERROR:
            self.setState({
              syncMessage: '一个未知错误',
              progress: false
            });
            break;
        }
      },
      (progress) => {
        self.setState({
          progress: progress
        });
      }
    );

  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.auth.state !== this.props.auth.state) {
      if (nextProps.auth.state === LOGGED_IN_STATE) {
        this.props.actions.replace({tabBarName: 'tabBar', name: 'home', data: {}});
      } else if (nextProps.auth.state === LOGGED_OUT_STATE) {
        this.props.actions.replace({name: 'signIn', data: {}});
      } else if (nextProps.auth.state === 'sigin00') {
        // 当用户的状态是登陆之后 显示手势密码

      }
      return false;
    } else {
      return true;
    }
    //return true;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.router.currentRoute !== nextProps.router.currentRoute) {
      _router = nextProps.router;
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Router {...this.props} assets={assets} initial="home">
          <Schema name="default" {...defaultSchema} />

          <Route name="loading" component={LoadSpinner} type="reset"
                 hideNavBar={true}
                 hideFooter={true}/>
          <Route name="signIn" component={SignIn} type="reset"
                 hideNavBar={true}
                 hideFooter={true}/>
          <Route name="pg" component={SignInGesture} type="reset"
                 hideNavBar={true}
                 hideFooter={true}/>

          <Route name="commodityDetail" component={CommodityDetail} title="详情"
                 hideNavBar={hideNavBar}
                 hideFooter={true}/>

          <TabRoute name="tabBar" barTint="#FFFFFF" tint="#32DEAF">
            <Route name="home" component={Home} title="首页"
                   tabItem={{icon: assets.home, title: '首页', default: true}}
                   hideNavBar={true}/>
            <Route name="publish" component={Movie} title="发布"
                   tabItem={{icon: assets.publish, title: '发布', }}
                   hideNavBar={hideNavBar}/>
            <Route name="message" component={Message} title="消息"
                   tabItem={{icon: assets.message, title: '消息', }}
                   hideNavBar={hideNavBar}/>
            <Route name="mine" component={Mine} title="我的"
                   tabItem={{icon: assets.mine, title: '我的', }}
                   hideNavBar={hideNavBar}/>
          </TabRoute>
        </Router>
        <Modal style={[styles.modal]} swipeToClose={false} position={"center"} ref={"downloadBox"}>
          <View>
            <Text>{this.state.syncMessage}</Text>
            {this.state.progress && (
              <Text>{this.state.progress.receivedBytes} / {this.state.progress.totalBytes}</Text>)}
          </View>
        </Modal>
      </View>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
