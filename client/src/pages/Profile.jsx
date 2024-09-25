import React, { useContext } from 'react'
import axios from 'axios'
import { AppContext } from '../context/AppContext';

const Profile = () => {

  const [users, setUsers] = useState([]);
  const {user}= useContext(AppContext);


  const getUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/getUsers");
    const data = await res.data;
    const filterredUsers = data.filter((u)=>u._id!==user?._id && !user?.disliked?.includes(u._id) &&!user?.favourites?.includes(u.id))
    setUsers(filterredUsers)
    console.log(users)
    
    
    
  }
  
  
  
  return (
   <>

   </>
  )
}

export default Profile