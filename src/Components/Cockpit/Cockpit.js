import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const assignedClasses = [];

  if (props.persons.lenght <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.lenght <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1> Hi, I'm a React App</h1>
      <p className={assignedClasses.join("")}>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </p>

      <button  onClick={props.clicked}  > Toggle Persons</button>
    </div>
  );
};

export default cockpit;
