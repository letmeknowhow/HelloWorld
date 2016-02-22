/**
 *  Class: Header
 *  Author: Niu Xiaoyu
 *  Date: 16/1/26
 *  Description: 
 */
import React from 'react-native';
const {StyleSheet, Text, View, Component, TouchableOpacity, Image } = React;
const category = require('../../../assets/icons/category.png');
const myPortrait = require('../../../assets/portrait1.png')
const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  portrait: {
    margin: 5,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
});

export default class Header extends Component {
  static propTypes = {};
  
  static defaultProps = {};
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[this.props.style, styles.container]}>
        <View style={[styles.page, {paddingTop: 15}]} >
          <TouchableOpacity onPress={this.props.handleConfigMenu}>
            <Image style={styles.portrait} source={myPortrait} />
          </TouchableOpacity>
        </View>
        <View style={[styles.page, {paddingTop: 15, alignItems: 'center', justifyContent: 'center'}]}>
          <Text style={{fontSize: 25, color: '#000', fontWeight: 'bold'}}>乐趣</Text>
        </View>
        <View style={[styles.page, {paddingTop: 15, paddingRight: 10, alignItems: 'flex-end', justifyContent: 'flex-end'}]}>
          <TouchableOpacity onPress={this.props.actions.routes.category()}>
            <Image source={category} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

