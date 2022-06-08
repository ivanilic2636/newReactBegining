import { useState } from "react";
import "./App.css";
import Card from "./components/UI/Card";

import AddUser from "./components/User/AddUser/AddUser";
import UserList from "./components/User/UserList/UserList";
import ErrorModal from "./components/Error/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [valid, setValid] = useState("");

  const addUsersHandler = (user) => {
    setUsers(prevUsers => {
          return [user, ...prevUsers];
        });
  }
   
const errorMsgHandler = (msg) => {
    setValid(msg);
}

const handleErrorMsg = () => {
  setValid("");
}

  return (
    <div className="main">
    <Card >
      <AddUser errorMsg={errorMsgHandler} onAddUser={addUsersHandler}/>
    </Card>

    <Card>
      <UserList users={users} />
    </Card>
    {valid.length>0 && <ErrorModal message={valid} handleError={handleErrorMsg} />}
    </div>
  );
}

export default App;
