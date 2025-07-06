import React, {useContext} from 'react'
import UserContext from "../Context/Context"


const Profile = () => {
    const {User} = useContext(UserContext)
    
    if (!User) return <><h1> Please Login First </h1></>

  return (
    <div>
        <h1>
            WELCOME {User.username}
        </h1>
    </div>
  )
}

export default Profile