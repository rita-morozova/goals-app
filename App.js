import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View>
        <TextInput placeholder='Goal for today'
         style={{borderBottomColor: 'black', borderBottomWidth: 1, padding: 10 }}/>
        <Button title='Add' />
      </View>
      <View>

      </View>
      <StatusBar style='auto' />
    </View>
  );
}


