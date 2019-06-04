import React from 'react';

const cockpit = (props) => {
    const assignedClasses = [];
    
    if ( props.persons.lenght <= 2 ) {
        assignedClasses.push ( classes.red); 
    }
    if (props.persons.lenght <= 1 ) {
        assignedClasses.push( classes.bold );
    }

    return (
        <div>
        <h1> Hi, I'm a React App</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>

        <button style={estilo} onClick={this.togglePersonHandler}>
          {" "}
          Toggle Persons
        </button>
        </div>
    );
};

export default cockpit;