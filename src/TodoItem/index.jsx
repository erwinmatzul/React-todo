import './TodoItem.css'
import { CompleteIcon } from '../CompleteIcon'
import { DeleteIcon } from '../DeleteIcon'

function TodoItem({ text, completed, onCompleted, onDelete }) {
  return (
    <li className="todo-item">
      
      <CompleteIcon completed={completed} onCompleted={onCompleted}/>

      <p className={`todo-text ${completed ? "todo-text-subrayado" : ""}`}>{text}</p>
      
      
      {/* 
      <span className={`todo-check ${completed ? "todo-check-completed" : ""}`}
      onClick={() => onCompleted()}
      >✓</span>

      <p className={`todo-text ${completed ? "todo-text-subrayado" : ""}`}>{text}</p>
      <span className="todo-delete"
      onClick={() => onDelete()}
      >✕</span>
 */}

 
      <DeleteIcon completed={completed} onDelete={onDelete} />

    </li>
  )
}
export {TodoItem}
