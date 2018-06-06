import React from "react";
import { AsyncStorage, StyleSheet, Text, View, TouchableHighlight, Button, TextInput, FlatList, Switch } from "react-native";
import displayTime from "./displayTime";
//import {FlatListBasics} from "./handleTimerList";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      paused: false,
      newTask: "",
      taskList: [
        {key: 'Lesson', timer: 60*90},
        {key: 'Lunch', timer: 60*60},
        {key: 'Exercise', timer: 60*60*5}
      ],
    };
  }

  startTimer() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  tick = () => {
      this.setState({timer: this.state.timer + 1, paused: false});
  }

  pause = () => {
    if (this.state.paused) {
      this.intervalId = setInterval(this.tick, 1000);
      this.setState({paused: false});
    } else {
      this.setState({timer: this.state.timer, paused: true});
      clearInterval(this.intervalId);
    }
  }

  addTaskName = (value) => {
    if (this.state.timer === 0) {
      let newTaskList = this.state.taskList;
      const newTask = {key: value, timer: null};
      this.setState({taskList: [...newTaskList, newTask]});
      this.startTimer();
      this.setState({newTask: ""})
    } else {
      alert("A task is already running, please stop it before creating a new one.");
    }

  }

  stopTimer = (value) => {
    this.pause();
    let taskStopped = this.state.taskList.pop().key;
    this.setState(
      {
        taskList: [...this.state.taskList, {key: taskStopped, timer: this.state.timer}],
        timer: 0
      }, this.saveInStorage);
  }

  deleteAll = (value) => {
    this.setState({taskList: []}, this.saveInStorage);
  }

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem("/Counter/value");
      if (value !== null) {
        this.setState({taskList: JSON.parse(value)});

      }
    } catch (error) {
      console.warn(error);
    }
  }

  // componentWillUnmount() {
    // this.setState({timer: this.state.timer}, this.saveInStorage);
  // }

  saveInStorage = () => {
    AsyncStorage.setItem("/Counter/value", JSON.stringify(this.state.taskList));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Enter a task name</Text>
          <TextInput
            style={{height: 40, width: 120, textAlign: "center"}}
            placeholder="Enter a task"
            onChangeText={(text) => this.setState({newTask: text})}
            onSubmitEditing={(event) => this.addTaskName(event.nativeEvent.text)}
            value={this.state.newTask}
          />
          <FlatList
            data={this.state.taskList}
            renderItem={({item}) => <Text style={styles.item}>{item.key} - {displayTime(item.timer)}</Text>}
          />
        </View>

        <Text style={styles.timer}>{displayTime(this.state.timer)}</Text>
          <View style={styles.container}>
            <Switch
              onValueChange={this.pause}
              title="Pause"
              value={this.state.paused}
            />
            <Button
              onPress={this.stopTimer}
              title="STOP"
              color="red"
            />
            <Button
              onPress={this.deleteAll}
              title="DELETE ALL"
              color="black"
              weight="bold"
            />

          </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  timer: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    paddingTop: 20,
  }
});
