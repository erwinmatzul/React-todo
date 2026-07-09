import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoItem } from '../TodoItem'
import React from 'react'
import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import '../App.css'

/*    const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el Curso de intro de React.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
]  
 
     localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
    */
/* 
localStorage.removeItem('TODOS_V1') */

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState("")

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length

  const completeTodo = (text) => {

    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )

    newTodos[todoIndex].completed = newTodos[todoIndex].completed ? false : true;
    saveTodos(newTodos)

  }

  const deleteTodo = (text) => {

    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
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
