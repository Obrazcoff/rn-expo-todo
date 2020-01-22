import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Navbar } from './components/Navbar'
import { AddTodo } from './components/AddTodo'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now().toString(),
        title: title,
      },
    ])
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <View>
          {todos.map((todo) => {
            return <Text key={todo.id}>{todo.title}</Text>
          })}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
})
