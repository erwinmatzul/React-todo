import './styles/TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {

  return (
    <input className="todo-search" type="text" placeholder="Buscar Tarea.."
      value={searchValue}
      onChange={(event) => {
       setSearchValue(event.target.value)
      }}
    />
  )
}

export { TodoSearch }