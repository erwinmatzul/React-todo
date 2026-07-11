import { TodoContext } from '../TodoContext'
import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton() {

  const { openModal, setOpenModal } = React.useContext(TodoContext)

  return (

    <button
      className="create-todo-btn"
      onClick={() => setOpenModal(state => !state)}
    >
      Crear Tarea
    </button>
  )
}
export { CreateTodoButton }