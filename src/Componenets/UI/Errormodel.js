import React from "react";
import Button from "./Button";
import classes from "./Errormodel.module.css";

const ErrorModel = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={classes.card}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className="div">
          <p className={classes.para}>{props.message}</p>
        </div>
        <footer className={classes.button}>
          <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModel;
