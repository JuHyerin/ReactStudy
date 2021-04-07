import React, {useContext} from 'react';
import {UserDispatch} from "./App";

const User = React.memo(function User({ user})  {
// const User = ({ user, onRemove, onToggle }) => {
    console.log('User rendered');

    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => {
                    dispatch({type: 'TOGGLE_USER', id: user.id})
                }}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => {
                dispatch({type:'REMOVE_USER', id: user.id})
            }}>
                삭제
            </button>
        </div>
    );
});

function UserList({ users}) {
    console.log('UserList rendered');
    return (
        <div>
            {users.map(user => (
                <User
                    user={user}
                    key={user.id}
                />
            ))}
        </div>
    );
}
// export default UserList;
export default React.memo(UserList);