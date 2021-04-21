import React, { useState } from "react";
import { StyleSheet, Button, View, FlatList} from "react-native";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [dayGoals, setDayGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);


  const addGoalHandler = goalTitle => {
    //currentGoals === prevState
    setDayGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setDayGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  

  return (
    <View style={styles.root}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <FlatList
       keyExtractor={(item, idx) => item.id}
       data={dayGoals}
       renderItem={itemData =>(
        <GoalItem 
        title={itemData.item.value}
        id={itemData.item.id}
        onDelete={removeGoalHandler}/>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },

 
});