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

const AppUI = () => {
    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>

                {({
                    loading,
                    error,
                    searchedTodos,
                    completeTodo,
                    deleteTodo

                }) => (
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
                )}

            </TodoContext.Consumer>
            <CreateTodoButton />
        </>
    )
}
export { AppUI }
