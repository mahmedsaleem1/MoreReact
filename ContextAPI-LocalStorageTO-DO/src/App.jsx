import {useState, useEffect} from "react"
import { ToDoProvider } from './Context/index'
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"


const App = () => {
  const [todos, setTodos] = useState([])
  const [isLoaded, setIsLoaded] = useState(false) // Track if we've loaded from localStorage

  const addTodo = (todo) => { // Not Sure
    setTodos((prev) => [{...todo},...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => 
      prevTodo.id === id ? todo : prevTodo
    ))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }


  const toggleComplete = (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        isCompleted: !prevTodo.isCompleted } : prevTodo))
  }

  useEffect(() => {
    try {
      // Check if localStorage is available
      if (typeof(Storage) !== "undefined" && window.localStorage) {
        const loadedTodos = JSON.parse(localStorage.getItem("todosStorageFile"))
        
        if (loadedTodos && loadedTodos.length > 0) {
          setTodos(loadedTodos)
        }
      }
    } catch (error) {
      console.error("Error loading todos from localStorage:", error)
    } finally {
      setIsLoaded(true) // Mark as loaded regardless of success/failure
    }
  }, [])

  useEffect(() => {
    // Only save to localStorage after we've loaded initial data
    if (!isLoaded) return
    
    try {
      if (typeof(Storage) !== "undefined" && window.localStorage) {
        localStorage.setItem("todosStorageFile", JSON.stringify(todos))
      }
    } catch (error) {
      console.error("Error saving todos to localStorage:", error)
    }
  }, [todos, isLoaded])
  

  return (
    <ToDoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
 
            {
              todos.map((todo) => (
                <div 
                  key={todo.id}
                  className='w-full'
                >
                  <TodoItem todo={todo}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App