import { useState } from "react"
import { useContext } from "react"
import UserContextProvider from "../Context/UserContextProvider.jsx"
import UserContext from "../Context/Context.js"

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const {setUser} = useContext(UserContext)

  return (
    <>
      <UserContextProvider>
        <h1>  Login Form  </h1>
        <input 
          type="text" 
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
          placeholder="Username"
        />
        
        <input 
          type="text" 
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          placeholder="Password"
        />

        <button  onClick={handleSubmit}>
            Submit
        </button>

      </UserContextProvider>
    </>
  )
}

export default Login
