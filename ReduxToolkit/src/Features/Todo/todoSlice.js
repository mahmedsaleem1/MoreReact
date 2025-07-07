import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id : 1,
            text: "This is my demo task"
        }
    ]
}

// Slice is a big version of reducer


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {  // Reducer accpets properties and functions
        addTodo: (state, action) => {        // Property : function
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },  
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },    // In context we declare but in Redux define too
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text
                }
                return todo
            })
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer // Registering reducers to Store