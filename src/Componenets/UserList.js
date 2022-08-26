import React from "react";
import classes from "./Userlist.module.css";

const colors = "#" + (Math.random().toString(16) + "00000").slice(2, 8);

const UserList = (props) => {
  return (
    <div>
      <ul className={classes.users}>
        {props.users.map((user) => (
          <li
            key={props.id}
            style={{ backgroundColor: colors, color: "white" }}
          >
            {user.name.toUpperCase()} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
