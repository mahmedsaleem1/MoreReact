import {useState} from "react"
import {useToDo} from "../Context/index"

const TodoForm = () => {
    const [todo, setTodo] = useState("")

    // retreiving addTodo functionality from useTodo, it is defined
    // in App.jsx and was declared at ToDoContext using useContext 

    const {addTodo} = useToDo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({id: Date.now(), task: todo, isCompleted: false})

        setTodo("")
    }

  return (
    <form onSubmit={add} className="flex">
        <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>
  )
}

export default TodoForm