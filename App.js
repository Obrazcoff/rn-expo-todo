import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Navbar } from './components/Navbar'
import { AddTodo } from './components/AddTodo'
import { Todo } from './components/Todo'

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
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
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
