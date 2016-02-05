/**
 *  Class: Header
 *  Author: Niu Xiaoyu
 *  Date: 16/1/26
 *  Description: 
 */
import React from 'react-native';
const {StyleSheet, Text, View, Component, TouchableOpacity, Image } = React;
const category = require('../../../assets/icons/category.png');

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

class Header extends Component {
  static propTypes = {};
  
  static defaultProps = {};
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[this.props.style, styles.container]}>
        <View key="1" style={[styles.page, {paddingTop: 15}]} />
        <View key="2" style={[styles.page, {paddingTop: 15, alignItems: 'center', justifyContent: 'center'}]}>
          <Text style={{fontSize: 25, color: '#000', fontWeight: 'bold'}}>乐趣</Text>
        </View>
        <View key="3" style={[styles.page, {paddingTop: 15, paddingRight: 10, alignItems: 'flex-end', justifyContent: 'flex-end'}]}>
          <TouchableOpacity>
            <Image source={category} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;
