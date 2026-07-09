import './CreateTodoButton.css'

function CreateTodoButton(){
  return(
    <button className="create-todo-btn"
     onClick={(event) => {
      console.log("le diste click")
      console.log(event)
      console.log(event.target)
     }}>Crear Tarea</button>
  )
}

export {CreateTodoButton}