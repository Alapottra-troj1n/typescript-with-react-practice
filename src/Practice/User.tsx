import React from 'react';
type UserProps = {
    name : string,
    age: number,
    addUser: ()=>void
}

const User = ({name, age, addUser} : UserProps): JSX.Element => {
    


    return (
        <div>
            
        </div>
    );
};

export default User;