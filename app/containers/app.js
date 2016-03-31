/**
 * Created by gaoletian on 15/11/25.
 */

import React from 'react-native';
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
const { Component,View, Navigator, Text, StyleSheet, Platform, BackAndroid, Alert } = React;


//import LoadSpinner from '../components/LoadSpinner';
/** 主tab 四页*/
import Home from '../components/home/Home';

import CommodityDetail from '../components/commodity/CommodityDetail';
//import WeChatTest from '../components/WeChatTest';
import Movie from '../components/Movie';
import MyImagePicker from '../components/ImagePicker';

import Category from '../components/Category';
import SearchList from '../components/SearchList';

/** 登陆页*/
//import SignIn from '../components/SignIn';
import SignInGesture from '../components/SignInGesture';


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

let hideNavBar = Platform.OS !== 'ios';
hideNavBar = false;

const reducerCreate = params=>{
  const defaultReducer = Reducer(params);
  return (state, action)=>{
    //console.log("ACTION:", action);
    return defaultReducer(state, action);
  }
};

class TabIcon extends React.Component {
  render(){
    return (
      <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
    );
  }
}

export default class Application extends Component {

  render() {
    return (
        <Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#F7F7F7'}}>
          <Scene key="root" hideNavBar={true}>
             <Scene key="commodityDetail" component={CommodityDetail} title="详情"/>
             <Scene key="category" component={Category} title="类别"/>
             <Scene key="searchList" component={SearchList} title="列表"/>
             <Scene key="tabBar" tabs={true} default="home" initial={true}>
               <Scene key="home" component={Home} title="首页" hideNavBar={true} icon={TabIcon}/>
               <Scene key="movie" component={Movie} title="视频" hideNavBar={hideNavBar} icon={TabIcon}/>
               <Scene key="sg" component={SignInGesture} title="手势" hideNavBar={true} icon={TabIcon}/>
               <Scene key="imagepicker" component={MyImagePicker} title="照片" hideNavBar={hideNavBar} icon={TabIcon}/>
              </Scene>
          </Scene>
        </Router>
    );
  }
  //render() {
  //  return (
  //    <Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#F7F7F7'}}>
  //      <Scene key="loading" component={LoadSpinner} />
  //      <Scene key="signIn" component={SignIn} />
  //      <Scene key="pg" component={SignInGesture}/>
  //
  //      <Scene key="commodityDetail" component={CommodityDetail} title="详情"/>
  //      <Scene key="category" component={Category} title="类别"/>
  //      <Scene key="searchList" component={SearchList} title="列表"/>
  //
  //      <Scene key="tabBar" tabs={true} default="home" initial={true}>
  //        <Scene key="home" component={Home} title="首页" hideNavBar={true}/>
  //        <Scene key="movie" component={Movie} title="视频" hideNavBar={hideNavBar}/>
  //        <Scene key="sg" component={SignInGesture} title="手势" hideNavBar={true}/>
  //        <Scene key="imagepicker" component={MyImagePicker} title="照片" hideNavBar={hideNavBar}/>
  //      </Scene>
  //    </Router>
  //  );
  //}
}
