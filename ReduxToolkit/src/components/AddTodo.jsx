import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/Todo/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch() 

    const addTodoHandler = (e) => {
        e.preventDefault() 
        dispatch(addTodo(input)) // Dispatch use reducers to change values in the Store
        setInput('')
    }

  return (
    <form 
        onSubmit={addTodoHandler}
    >
        <input type="text"
            placeholder='Enter Todo Here'
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />

        <button
            type='submit'>
                Add Todo
        </button>

    </form>
  )
}

export default AddTodo