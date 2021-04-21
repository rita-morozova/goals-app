import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Text, FlatList} from "react-native";

export default function App() {

  const [goal, setGoal] = useState('');
  const [dayGoals, setDayGoals] = useState([]);

  const goalInputHandler = (text) => {
    setGoal(text)
  }

  const addGoalHandler = () => {
    setDayGoals(dayGoals => [...dayGoals, {id: Math.random().toString(), value: goal}])
  }

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Goal for today" style={styles.input} onChangeText={goalInputHandler} value={goal}/>
        <Button title="Add" onPress={addGoalHandler}/>
      </View>
      <FlatList keyExtractor={(item, idx) => item.id} data={dayGoals} renderItem={itemData =>(
        <View style={styles.listItem}><Text>{itemData.item.value}</Text></View>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: { 
    width: 200,
    borderColor: "black", 
    borderWidth: 1, 
    padding: 10 
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  }
});