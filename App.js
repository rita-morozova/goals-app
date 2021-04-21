import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Text, FlatList} from "react-native";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {


  const [dayGoals, setDayGoals] = useState([]);


  const addGoalHandler = goalTitle => {
    //currentGoals === prevState
    setDayGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}])
  }

  

  return (
    <View style={styles.root}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList
       keyExtractor={(item, idx) => item.id}
       data={dayGoals}
       renderItem={itemData =>(
        <GoalItem 
        title={itemData.item.value}
        onDelete={() => console.log('hi')}/>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },

 
});