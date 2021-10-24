import { useState } from 'react/cjs/react.development';

import InputForm from './components/InputForm'
import Logs from './components/Logs'

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers(prevUsers => {
      return [user, ...prevUsers]
    })
  }

  return (
    <div>
      <InputForm onAddUser={addUserHandler} />
      <Logs items={users} />
    </div>
  );
}

export default App;
