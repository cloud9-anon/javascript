import "./App.css";
import Header from "./Header";
import UserList from "./UserList";
import { useState } from "react";
import UserForm from "./UserForm";

function App() {
  const [user_name, setUser] = useState(["Rohan"]);
  const [user_gender, setGender] = useState(["Male"]);
  const [user_dob, setDob] = useState(["04-04-2001"]);

  const adduser = (name, gender, dob) => {
    const addusername = (name) => {
      setUser([...user_name, name]);
    };
    const addgender = (gender) => {
      setGender([...user_gender, gender]);
    };
    const adddob = (dob) => {
      setUser([...user_dob, dob]);
    };
  };

  return (
    <div className="App">
      <Header></Header>

      <div className="col-md-12">
        <UserList
          name={user_name}
          gender={user_gender}
          dob={user_dob}
        ></UserList>
      </div>

      <div className="col-md-12">
        <UserForm add={adduser}></UserForm>
      </div>
    </div>
  );
}

export default App;
