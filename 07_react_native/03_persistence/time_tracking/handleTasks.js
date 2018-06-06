import React from "react";
import { StyleSheet, Text, View, TouchableHighlight, Button, TextInput, FlatList } from "react-native";
import displayTime from "./displayTime";

export default function(prop) {
  return (
    <View style={styles.container}>
      <Text>Enter a task name</Text>
      <TextInput
        style={{height: 40, width: 120, textAlign: "center"}}
        placeholder="Enter a task"
        onChangeText={(text) => this.setState({newTask: text})}
        onSubmitEditing={(event) => this.addTaskName(event.nativeEvent.text)}
        value={props.newTask}
      />
      <FlatList
        data={props.taskList}
        renderItem={({item}) => <Text style={styles.item}>{item.key} - {displayTime(item.timer)}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
  },
})
