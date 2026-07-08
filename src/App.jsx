import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoItem } from './TodoItem'

import React from 'react'
import { useState } from 'react'

import './styles/App.css'

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el Curso de intro de React.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState("")

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length

  const completeTodo = (text) => {

    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )

    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {

    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )

    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)

  }


  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>

        {
          searchedTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
              onCompleted={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}

            />
          ))
        }

      </TodoList>

      <CreateTodoButton />
    </> //61dafa
  )
}

export default App
