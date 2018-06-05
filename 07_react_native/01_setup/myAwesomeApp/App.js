import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';



export default class App extends React.Component {

    state = {
      portrait: true,
      urlSource: require("./maxresdefault.png"),
    };


  setImage = () => {
    console.log("passé ici");
    const url1 = require("./maxresdefault.png");
    const url2 = require("./aGuyNextDoor.png");
    // this.setState({urlSource: require("./aGuyNextDoor.png")});
    this.setState({portrait: !this.state.portrait});
    if (this.state.portrait) {
      this.setState({urlSource: url1});
    } else {
      this.setState({urlSource: url2});
    }
  }

  render() {
    console.log("passé ici");
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={{fontSize: 15}}>Header</Text>
        </View>
        <View style={styles.container}>

          <Text style={{fontSize: 20}}>
              <Text style={{fontWeight: 'bold'}}>
                UBIQ
              </Text>
             CEO
          </Text>
          <TouchableHighlight onPress={this.setImage}>
          <Image
            style={{width: 200, height: 260, borderTopLeftRadius: 25, borderTopRightRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
            source={this.state.urlSource}
          />
          </TouchableHighlight>
          <Text style={{fontStyle: 'italic'}}>"Et dire que ça a failli s'appeler CCOS..."</Text>
        </View>
        <View style={styles.footer}>
          <View style={[styles.menu, {flex: 1}]}>
            <Text style={styles.textMenu}>Menu1</Text>
          </View>
          <View style={[styles.menu, {flex: 1}]}>
            <Text style={styles.textMenu}>Menu2</Text>
          </View>
          <View style={[styles.menu, {flex: 1, borderRightWidth: 0}]}>
            <Text style={styles.textMenu}>Menu3</Text>
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  header: {
    height: 80,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: 100,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  menu: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    borderRightColor: 'black',
    borderRightWidth: 2,
    paddingTop: 30
  },
  textMenu: {
    fontSize: 16,
    color: 'white',
  },
});
