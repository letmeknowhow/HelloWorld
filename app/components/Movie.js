/**
 *  Class: Movie
 *  Author: Niu Xiaoyu
 *  Date: 15/12/23.
 *  Description: 培训
 */
import React from 'react-native';
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Component,
  AlertIOS,
  } = React;

import Video from 'react-native-video';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#efefef'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'white'
  },
  headerText: {
    fontSize: 16
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  product: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },
  productText: {
    fontSize: 12
  },
});


const videostyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: 'absolute',
    bottom: 44,
    left: 4,
    right: 4,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingBottom: 10,
  },
  skinControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: "white",
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
  nativeVideoControls: {
    top: 184,
    height: 300
  }
});


export default class Movie extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      controls: false,
      paused: true,
      skin: 'custom'
    };
  }

  onLoad(data) {
    this.setState({duration: data.duration});
  }

  onProgress(data) {
    this.setState({currentTime: data.currentTime});
  }

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    } else {
      return 0;
    }
  }

  renderSkinControl(skin) {
    var isSelected = this.state.skin == skin;
    var selectControls = skin == 'native' || skin == 'embed';
    return (
      <TouchableOpacity onPress={() => {
            this.setState({
              controls: selectControls,
              skin: skin
            }) }}>
        <Text style={[videostyles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {skin}
        </Text>
      </TouchableOpacity>
    );
  }

  renderRateControl(rate) {
    var isSelected = (this.state.rate == rate);

    return (
      <TouchableOpacity onPress={() => { this.setState({rate: rate}) }}>
        <Text style={[videostyles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    )
  }

  renderResizeModeControl(resizeMode) {
    var isSelected = (this.state.resizeMode == resizeMode);

    return (
      <TouchableOpacity onPress={() => { this.setState({resizeMode: resizeMode}) }}>
        <Text style={[videostyles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl(volume) {
    var isSelected = (this.state.volume == volume);

    return (
      <TouchableOpacity onPress={() => { this.setState({volume: volume}) }}>
        <Text style={[videostyles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }

  renderCustomSkin() {
    var flexCompleted = this.getCurrentTimePercentage() * 100;
    var flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View style={videostyles.container}>
        <TouchableOpacity style={videostyles.fullScreen}
                          onPress={() => {this.setState({paused: !this.state.paused})}}>
          <Video source={{uri: "jijijiji"}}
                 style={videostyles.fullScreen}
                 rate={this.state.rate}
                 paused={this.state.paused}
                 volume={this.state.volume}
                 muted={this.state.muted}
                 resizeMode={this.state.resizeMode}
                 onLoad={this.onLoad.bind(this)}
                 onProgress={this.onProgress.bind(this)}
                 onEnd={() => { AlertIOS.alert('Done!') }}
                 repeat={true}/>
        </TouchableOpacity>

        <View style={videostyles.controls}>
          <View style={videostyles.generalControls}>
            <View style={videostyles.skinControl}>
              {this.renderSkinControl('custom')}
              {this.renderSkinControl('native')}
              {this.renderSkinControl('embed')}
            </View>
          </View>
          <View style={videostyles.generalControls}>
            <View style={videostyles.rateControl}>
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(2.0)}
            </View>

            <View style={videostyles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>

            <View style={videostyles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
          </View>

          <View style={videostyles.trackingControls}>
            <View style={videostyles.progress}>
              <View style={[videostyles.innerProgressCompleted, {flex: flexCompleted}]}/>
              <View style={[videostyles.innerProgressRemaining, {flex: flexRemaining}]}/>
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderNativeSkin() {
    var videoStyle = this.state.skin == 'embed' ? videostyles.nativeVideoControls : videostyles.fullScreen;
    return (
      <View style={videostyles.container}>
        <View style={videostyles.fullScreen}>
          <Video source={{uri: "jijijiji"}}
                 style={videoStyle}
                 rate={this.state.rate}
                 paused={this.state.paused}
                 volume={this.state.volume}
                 muted={this.state.muted}
                 resizeMode={this.state.resizeMode}
                 onLoad={this.onLoad.bind(this)}
                 onProgress={this.onProgress.bind(this)}
                 onEnd={() => { AlertIOS.alert('Done!') }}
                 repeat={true}
                 controls={this.state.controls}/>
        </View>
        <View style={videostyles.controls}>
          <View style={videostyles.generalControls}>
            <View style={videostyles.skinControl}>
              {this.renderSkinControl('custom')}
              {this.renderSkinControl('native')}
              {this.renderSkinControl('embed')}
            </View>
          </View>
          <View style={videostyles.generalControls}>
            <View style={videostyles.rateControl}>
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(2.0)}
            </View>

            <View style={videostyles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>

            <View style={videostyles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
          </View>
        </View>

      </View>
    );
  }

  render() {
    return this.state.controls ? this.renderNativeSkin() : this.renderCustomSkin();
  }

}


