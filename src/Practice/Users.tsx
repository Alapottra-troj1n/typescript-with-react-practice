import React, { useEffect, useState } from 'react';
import UserModel from '../Types/UserModel';
import User from './User';

const Users = () => {

    const [users,setUsers] = useState<UserModel[]>([])
    const [team,setTeam] = useState<UserModel[]>([])
    useEffect(() =>{
       const fetchData = async() => {

                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                setUsers(data);
       }
       fetchData();

    },[])

    const addTeam = (user:UserModel):void => {
        //function defining must use a paramter of UserModel type
        const newTeam = [...team, user]
       

        setTeam(newTeam);

    }

    return (
        <div>
            <h1>My Users</h1>
           <h2> {team.length}</h2>
            {users.map(user => <User user={user} addTeam={addTeam}  />)}
            
        </div>
    );
};

export default Users;