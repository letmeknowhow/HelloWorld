/**
 *  Class: Header
 *  Author: Niu Xiaoyu
 *  Date: 16/1/26
 *  Description: 
 */
import React from 'react-native';
const {StyleSheet, Text, View, Component, TouchableOpacity, Image } = React;


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  button: {
    height: 30,
    width: 30
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
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../../assets/Extension.png')} />
          <Text style={{fontSize: 8, color: '#FFF'}}>扫一扫</Text>
        </TouchableOpacity>
        <Text>Header</Text>
      </View>
    );
  }
}

export default Header;
