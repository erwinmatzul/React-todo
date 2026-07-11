import React, { useState } from 'react'

import { TodoContext } from '../TodoContext/index.jsx'

const TodoForm = () => {
    const { setOpenModal, addTodo  } = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState("")

    const onSubmit = (event) => {
     event.preventDefault()
     addTodo(newTodoValue)
     setOpenModal(false)
    }

    const onChange = (event) => {
     setNewTodoValue(event.target.value)
    }
    
    const onCancel = () => {
    setOpenModal(false)
    }


    return (
        <form className="todo-form" onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea</label>
            <textarea
             placeholder="Cortar cebolla para el almuerzo"
             value={newTodoValue}
             onChange={onChange} 
             />

            <div className="todo-form-buttonContainer">
                <button
                    type="button"
                    className="todo-form-button todo-form-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="todo-form-button todo-form-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }
