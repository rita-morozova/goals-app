import React, { useState} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


const GoalInput = (props) => {

    const [goal, setGoal] = useState('');

    const goalInputHandler = (text) => {
        setGoal(text)
      }

    return (
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Goal for today" 
        style={styles.input}
        onChangeText={goalInputHandler}
        value={goal}/>
        <Button 
        title="Add" 
        onPress={props.onAddGoal.bind(this, goal)}/>
      </View>
    )
}


const styles = StyleSheet.create({
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
      }
})

export default GoalInput