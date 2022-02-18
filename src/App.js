import './App.css';
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/Users';

function App() {

  const dispatch = useDispatch();
  const userlist = useSelector(state => state.users.value)

  const [name, setName] = useState('');
  const [username, setUserame] = useState('');
  const [newUsername, setNewUserame] = useState('');

  return (
    <div className="App">
      {""}
      <div className="addUser">
        <input 
          type="text" 
          placeholder="Name..." 
          onChange={e => {setName(e.target.value)
          }}
        />
        <input 
          type="text" 
          placeholder="Username..." 
          onChange={e => {setUserame(e.target.value)
          }}
        />
        <button 
          onClick={() =>{
            dispatch(
              addUser({
                id: userlist[userlist.length - 1].id + 1, 
                name, 
                username
              })
            )
          }}
        > 
          {""}
          Add User 
        </button>
      </div>
      <div className="displayUsers">
        {userlist.map(user => {
          return(
            <div>
              <h3>
                {user.name} - {user.username}
              </h3> 
              <input 
                type="text"
                placeholder="New Username..."
                onChange={e => {
                  setNewUserame(e.target.value)
                }}
              />
              <button 
                onClick={() => {
                  dispatch(updateUsername({id: user.id, username: newUsername}))
                }}
              
              >
                {""}
                Update Username</button>
              <button 
                onClick={() => {
                  dispatch(deleteUser({
                    id: user.id
                  }))
                }}
              >
                Delete User
              </button>
            </div>
          )
        }
        )}
      </div>
      
    </div>
  );
}

export default App;
