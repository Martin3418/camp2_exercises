import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ImageToDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portrait: true,
      urlSource: "./maxresdefault.png",
    };

  setImage() {
    const url1 = './maxresdefault.png';
    const url2 = './aGuyNextDoor.png';
    this.setState({portrait: !this.state.portrait});
    if (this.state.portrait) {
      this.setState({urlSource: url1});
    } else {
      this.setState({urlSource: url2});
    }
  }

  render() {
    return (

      <Image
        style={{width: 200, height: 260, borderTopLeftRadius: 25, borderTopRightRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
        source={require(this.state.urlSource)}
        onOrientationChange={this.setImage()}
      />
    )
  }
}
