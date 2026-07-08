import CheckSVG from './assets/check.svg?react'
import DeleteSVG from './assets/delete.svg?react'

/* const iconTypes = {
    "check": <CheckSVG width={15} style={{ fill: color }} />,
    "delete" : <DeleteSVG width={10} style={{ fill: color }} />
} */

function TodoIcon({ type, color }) {
    return (
        <span className={`todo-icon todo-icon-${type}`}>
              {/*   {iconTypes[type]} */}

              {type == 'check' ? <CheckSVG width={15} style={{ fill: color }} /> :  <DeleteSVG width={10} style={{ fill: color }} /> }
        </span>
    )
}

export { TodoIcon }