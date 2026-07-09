    import CheckSVG from '../assets/check.svg?react'
    import DeleteSVG from '../assets/delete.svg?react'
    import './TodoIcon.css'

    /* const iconTypes = {
        "check": <CheckSVG width={15} style={{ fill: color }} />,
        "delete" : <DeleteSVG width={10} style={{ fill: color }} />
    } */

    function TodoIcon({ type, color, onCompleted, onDelete }) {
        return (
            <span className={`todo-icon-${color}`}>
                {/*   {iconTypes[type]} */}

                {type == 'check' ? <CheckSVG onClick={onCompleted} /> 
                :  <DeleteSVG onClick={onDelete} /> }
            </span>
        )
    }

    export { TodoIcon }