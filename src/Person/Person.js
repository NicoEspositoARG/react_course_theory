import React from "react"; // no hace falta importar { Component } porque no tenemos herencia acá.

import './Person.css';

//funcitonal component, or dumb component or stateless.

const person = props => {
  // en el argumento props, recibo todos los atributos que paso desde el componente padre.
  // en el caso de un class component, para props hay que usar this.props
  return (
    <div className="Person">
       <p onClick={ props.click } > 
       {/* lo importante es que mediante la prop "click" estamos pasando un metodo por referencia.   */}
        I'm a {props.name}, and I am {props.age} years old.
      </p>
      <p> {props.children} </p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

//es un export de la function.
export default person;
