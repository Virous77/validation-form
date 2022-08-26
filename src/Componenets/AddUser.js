import React, { useState } from "react";
import Card from "./UI/Card";
import classes from "./Adduser.module.css";
import Button from "./UI/Button";
import ErrorModel from "./UI/Errormodel";
import SuccessFull from "./UI/SuccessFull";

const AddUser = (props) => {
  const [enterUser, setEnterUser] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [showModel, setShowModel] = useState();
  const [succsessForm, setSuccessForm] = useState();

  const userChangeHandler = (e) => {
    setEnterUser(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnterAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enterUser.length > 0 && enterAge.length > 0) {
      setSuccessForm({
        title: "Succesfull Form!!",
        message: "You are good to go",
      });
    }

    if (enterUser.trim().length === 0 || enterAge.trim().length === 0) {
      setShowModel({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values)",
      });
      return;
    }

    if (enterAge < 0) {
      setShowModel({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enterUser, enterAge);

    setEnterUser("");
    setEnterAge("");
  };

  const errorHandler = () => {
    setShowModel(null);
    setSuccessForm(null);
  };

  return (
    <div>
      {showModel && (
        <ErrorModel
          title={showModel.title}
          message={showModel.message}
          onConfirm={errorHandler}
        />
      )}
      {(succsessForm && (
        <SuccessFull
          title={succsessForm.title}
          message={succsessForm.message}
          onConfirm={errorHandler}
        />
      )) || (
        <Card>
          <form onSubmit={formSubmitHandler}>
            <div className={classes.form}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                value={enterUser}
                id="username"
                onChange={userChangeHandler}
              />
            </div>

            <div className={classes.form}>
              <label htmlFor="userage">Age (Years Old)</label>
              <input
                type="text"
                value={enterAge}
                id="userage"
                onChange={ageChangeHandler}
              />
            </div>
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default AddUser;
