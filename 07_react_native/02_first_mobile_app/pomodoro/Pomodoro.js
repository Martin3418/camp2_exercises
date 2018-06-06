import React from "react";
import { StyleSheet, Text, View, TouchableHighlight, Button } from "react-native";
import displayTime from "./displayTime";
import PomodoroDisplay from "./PomodoroDisplay";

export default class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: this.props.activeTime,
      pause: false,
      activeSessionLeft: 2
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick = () => {
    if (this.state.timer > 0) {
      this.setState({timer: this.state.timer - 1});
    } else {
      const activeSessionLeft = this.state.pause ? this.state.activeSessionLeft : this.state.activeSessionLeft - 1;
      if (activeSessionLeft > 0) {
        this.setState({
          timer: this.state.pause ? this.props.activeTime : this.props.pauseTime,
          pause: !this.state.pause,
          activeSessionLeft: activeSessionLeft
        });
      } else {
        return this.setState({
          activeSessionLeft: 0
        });

      }
    }
  }

  start = () => {
    this.setState({
      timer: this.props.activeTime,
      pause: false,
      activeSessionLeft: 4
    });
  }

  render() {
    return (
    //   <View style={styles.container}>
    //   {this.state.activeSessionLeft > 0
    //     ? <Text style={styles.timer}>{displayTime(this.state.timer)}</Text>
    //     : (
    //       <View>
    //         <Text style={styles.timer}>Pomodoro</Text>
    //         <TouchableHighlight onPress={this.start}>
    //           <Text>Start</Text>
    //         </TouchableHighlight>
    //       </View>
    //     )
    //   }
    //   <Text>activeSessionLeft: {this.state.activeSessionLeft}</Text>
    // </View>

    <PomodoroDisplay
        timer={this.state.timer}
        started={this.state.activeSessionLeft > 0}
        pause={this.state.pause}
        start={this.start}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  timer: {
    fontSize: 30,
    fontWeight: "bold",
  }
});
