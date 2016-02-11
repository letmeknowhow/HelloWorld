/**
 *  Class: Footer
 *  Author: Niu Xiaoyu
 *  Date: 16/2/11.
 *  Description:
 */
import React from 'react-native';

const { Component, View, Text, StyleSheet, Image, TouchableOpacity } = React;
const message = require('../../../assets/icons/message.png');
const zan = require('../../../assets/icons/zan.png');
const share = require('../../../assets/icons/share.png');

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
  }
});

export default class Footer extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={[styles.container, {flex: 3}]}>
          <TouchableOpacity>
            <Image style={styles.img} source={message} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.img} source={zan} />
          </TouchableOpacity>
          <TouchableOpacity>
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
}