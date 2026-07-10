import React from 'react'
import './TodosLoading.css'

const TodoLoading = () => {
  return(
    <div className='LoadingTodo-container'>
    <span className='LoadingTodo-completeIcon'></span>
    <p className='LoadingTodo-text'></p>
    <span className='LoadingTodo-deleteIcon'></span>
    </div>
  )
}

export {TodoLoading}
