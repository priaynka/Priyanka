import React from 'react';
import { User } from './User';

let printFunc = function(){
    console.log('called from the print function inside UserList component');
}

export function UserList(props){
    console.log(props);
                let userList = (
                <div className="row">
                    <h1>Users Length : {props.users.length}</h1>
                    {props.users.map(user => {
                    return <User  key={user.id} data={user} print = {printFunc}/>
                    })}
                </div>
            );
            
            return userList;
            

}
