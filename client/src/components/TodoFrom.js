import {React, useState} from 'react'




export const TodoFrom = ({addTodo}) => {

  const [value, setValue] = useState("")



 console.log(value)

 const handleSubmit = e => {
  e.preventDefault();
  if (value) {
    // add todo
    addTodo(value);
    // clear form after submission
    setValue('');
  }
 }

  return (
    <form className='TodoForm' onSubmit={handleSubmit} >
        <input onChange={(e) => setValue(e.target.value)} value={value} type="text" className="todo-input" placeholder="¿Cual es la tarea?"/>
        <button type='submit' className='todo-btn' >+</button>
    </form>
  )
}
