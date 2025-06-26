import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

type User = {
  id: string; 
  picture: string;
  firstName: string;
  lastName: string;
  gender: string;
  email?:string;
  phone: string;
  address:string;
  birthDate: string;
  about: string;
  



};

function UserDetails() {

    const [user, setUser]=useState<User>();

    let {userId} = useParams();
    console.log(userId)
    
  // fonction to fetch user details based on userId
    const getOneUser = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        const user = await response.json();

        setUser(user)

        console.log(`https://jsonplaceholder.typicode.com/users/${userId}`)

        
    }

    useEffect(()=>{
        getOneUser();
    }, [])
  return (

    <div className="flex">
      <div className="">
      <h3 className="text-lg">{user?.gender} {user?.firstName} {user?.lastName}</h3>
                        <p>{user?.email}</p>
                        <p>{user?.phone}</p>
      </div>

     
    </div>

    
     );
}

export default UserDetails