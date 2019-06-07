import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit"


class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor")
  }

  state = {
    persons: [
      { id: "a1", name: "Max", age: 28 },
      { id: "a2", name: "Manu", age: 22 },
      { id: "a3", name: "Steph", age: 23 }
    ],
    otherState: "some other value",
    showPersons: false
  };


static getDerivedStateFromProps(props, state){
  console.log("[App.js] getDerivedStateFromProps", props)
  return props

}

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

  componentDidMount(){
  console.log("[App.js] Component did mount..");

  }
  render() {
    console.log("[App.js] Render")


    let personsDiv = null;

    if (this.state.showPersons) {
      personsDiv = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
      );
    }

    return (
      <div className={classes.App}>
        {/* <h1 className={classes.sarasa}>holaaaaaaaaa</h1> */}
        <Cockpit
         showPersons= {this.state.showPersons}
         persons={this.state.persons}
         clicked={this.togglePersonHandler}
         />
        {personsDiv}
      </div>
    );
  }
}
export default App;
