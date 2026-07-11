
import { TodoContext } from '../TodoContext'
import React  from 'react'

import './TodoCounter.css'

function TodoCounter() {

    const { completedTodos, totalTodos } = React.useContext(TodoContext)

    return (
        <h1 className='todo-counter'>{`${completedTodos == totalTodos ? `Tareas Completadas` : `Has completado ${completedTodos} de ${totalTodos} TODOS`}`}</h1>
    )
}

export { TodoCounter }