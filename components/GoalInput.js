import React, { useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';


const GoalInput = (props) => {

    const [goal, setGoal] = useState('');

    const goalInputHandler = (text) => {
        setGoal(text)
      }

    const addGoalHandler = () => {
        props.onAddGoal(goal)
        setGoal('')
    }  

   return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Goal for today" 
        style={styles.input}
        onChangeText={goalInputHandler}
        value={goal}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title='CANCEL' color='red' onPress={props.onCancel}/>
            </View>
            <View style={styles.button}>
                <Button 
                title="Add" 
                onPress={addGoalHandler}/>
            </View>
           </View>
      </View>
    </Modal>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      input: { 
        width: 200,
        borderColor: "black", 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10, 
      },
      buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '50%'
      },
      button: {
          width: '40%'
      }
})

export default GoalInput