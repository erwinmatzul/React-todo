import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoLoading } from '../TodoLoading.jsx'
import { TodoError } from '../TodoError'
import { EMptyTodos } from '../EMptyTodos'
import '../App.css'
import { TodoContext } from '../TodoContext/index.jsx'
import React from 'react'
import { Modal } from '../Modal/index.jsx'
import { TodoForm } from '../TodoForm/index.jsx'

const AppUI = () => {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,

    } = React.useContext(TodoContext)

    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>

                {loading && (
                    <>
                        <TodoLoading />
                        <TodoLoading />
                        <TodoLoading />
                    </>
                )}
                {error && <TodoError />}
                {(!loading && searchedTodos.length == 0) && <EMptyTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
                        onCompleted={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))
                }
            </TodoList>
            <CreateTodoButton />

            {
                openModal && (

                    <Modal>
                        <TodoForm />
                    </Modal>
                )
            }
        </>
    )
}
export { AppUI }
