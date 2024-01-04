import React from "react";
import { useState } from "react";

export default function UserList(props) {
  return (
    <div>
      {props.name.map((name, index) => (
        <table border="2">
          <thead>
            <tr>
              <td>User Name</td>
              <td>Gender</td>
              <td>Dob</td>
            </tr>
          </thead>
          <tr key={index}>
            <td>{name}</td>
            <td>{props.gender}</td>
            <td>{props.dob}</td>
          </tr>
        </table>
      ))}
    </div>
  );
}
