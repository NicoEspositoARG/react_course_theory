import React, { Component } from "react";
import "./App.css";
import Persons from "../Components/Persons/Persons";

class App extends Component {
  //se hereda de Component.
  // cuando se modifica state, se dispara un re render.
  state = {
    persons: [
      //array of objects
      { id: "a1", name: "Max", age: 28 },
      { id: "a2", name: "Manu", age: 22 },
      { id: "a3", name: "Steph", age: 23 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const selectedPerson = { ...this.state.persons[personIndex] };

    selectedPerson.name = event.target.value;

    const oPersons = [...this.state.persons];
    oPersons[personIndex] = selectedPerson;

    this.setState({ persons: oPersons });
  };

  togglePersonHandler = (event, id) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const estilo = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let personsDiv = null;

    if (this.state.showPersons) {
      personsDiv = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        

        {personsDiv}
      </div>
    );
  }
}
export default App;
