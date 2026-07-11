import React, { useState } from 'react'
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

 /*  const defaultTodos = [
   { text: 'llorar con la llorona', completed: false },
   { text: 'Cortar cebolla', completed: false },
   { text: 'Aprender jsx', completed: false },
   { text: 'jugar', completed: true }
 ]

 localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
  */// localStorage.removeItem('TODOS_V1')

function App() {
  return (

    <TodoProvider>
    <AppUI/>
    </TodoProvider>
    
  )
}

export default App