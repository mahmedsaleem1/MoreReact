import UserContextProvider from "./Context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"


function App() {

  return (
    <UserContextProvider>
      <h1>This is Context API Practise</h1>
      <Login />
      <Profile /> 

    </UserContextProvider>
  )
}

export default App
