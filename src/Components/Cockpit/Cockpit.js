import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from '../context/auth-context';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext); 

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // HTTP request...
    // setTimeout(()=>{
    //// const timer = setTimeout(()=>{ se podría guardar el timer y hacer el clean up dentro del return **

      // alert('Saved data to cloud!')
      // ;}, 1000);
    toggleBtnRef.current.click(); // this useEffect runs only the first time, after render so it knows the reference to the btn, and so i can click on it.

      return () => {
        // ** clearTimeout(timer); 
        //runs before the main useEffect function runs but after the first render cycle!.
        console.log("[Cockpit.js] cleanup work in useEffect");

      };
    // },[props.persons]);
    },[]); // runs only the first time

    useEffect(() => { 
    console.log("[Cockpit.js] 2nd useEffect");
      return () => {
        console.log("[Cockpit.js] cleanup work in 2nd useEffect");
      }
    });




  const assignedClasses = [];

  if (props.personsLenght <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLenght <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1> {props.title}</h1>
      <p className={assignedClasses.join("")}>
        {}
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </p>

      <button  ref={toggleBtnRef}  onClick={props.clicked}  > Toggle Persons</button>

      {/* <AuthContext.Consumer> */}
       <button onClick={authContext.login}>Log in</button>
      {/* </AuthContext.Consumer> */}
    </div>
  );
};

export default React.memo(Cockpit);
