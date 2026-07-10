    import CheckSVG from '../assets/check.svg?react'
    import DeleteSVG from '../assets/delete.svg?react'
    import './TodoIcon.css'

    function TodoIcon({ type, color, onCompleted, onDelete }) {
        return (
            <span className={`todo-icon-${color}`}>

                {type == 'check' ? <CheckSVG onClick={onCompleted} /> 
                :  <DeleteSVG onClick={onDelete} /> }
            </span>
        )
    }

    export { TodoIcon }