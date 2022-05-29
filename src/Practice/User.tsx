import React from 'react';
import UserModel from '../Types/UserModel';


type UserProps = {
    user : UserModel
    addTeam : (user: UserModel) => void //function prop defining
}
//props type defining 

const User = ({user,addTeam} : UserProps): JSX.Element  => {



    return (
        <div>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <hr />
            <button onClick={()=> addTeam(user)} >ADD</button>
        </div>
    );
};

export default User;