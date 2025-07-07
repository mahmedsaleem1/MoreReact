import { useSelector, useDispatch } from "react-redux"
import {removeTodo, updateTodo} from "../Features/Todo/todoSlice"

const Todos = () => {
    const todos = useSelector((state) => state.todos)  // To retreive
    const dispatch = useDispatch()  // To Add / Change
  return (
    <>
      <div>
        Todos
      </div>
      {
        todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
            <button
              onClick={() => {
                const newText = prompt("Edit todo:", todo.text)
                if (newText) {
                  dispatch(updateTodo({id: todo.id, text: newText}))
                }
              }}
            >
              Edit
            </button>
          </li>
        ))
      }
    </>
  )
}

export default Todos