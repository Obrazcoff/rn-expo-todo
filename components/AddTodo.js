import React from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
  const pressHandler = () => {
    onSubmit('Test note')
  }

  return (
    <View style={styles.wrapper}>
      <TextInput style={styles.input} />
      <Button title="Add" onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '80%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#3848ab',
  },
})
