import { useSelector, useDispatch } from "react-redux"
import {removeTodo} from "../Features/Todo/todoSlice"

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
          </li>
        ))
      }
    </>
  )
}

export default Todos