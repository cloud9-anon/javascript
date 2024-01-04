import React from "react";
import { useState } from "react";

export default function UserForm(props) {
  const [name, set_name] = useState("");
  const [gender, set_gender] = useState("");
  const [dob, set_dob] = useState("");

  const insertuser = (event) => {
    event.preventDefault();
    props.add(name, gender, dob);

    set_name("");
    set_gender("");
    set_dob("");
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={(event) => {
              set_name(event.target.value);
            }}
          />
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
          />
          <input type="date" className="form-control" id="date" name="date" />
        </div>
        <button type="button" className="btn btn-primary" onClick={insertuser}>
          Add User
        </button>
      </form>
    </div>
  );
}
