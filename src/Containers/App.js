import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from '../Components/hoc/withClass';
import Aux from '../Components/hoc/Aux';
import AuthContext from '../Components/context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "a1", name: "Max", age: 28 },
      { id: "a2", name: "Manu", age: 22 },
      { id: "a3", name: "Steph", age: 23 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const selectedPerson = { ...this.state.persons[personIndex] };

    selectedPerson.name = event.target.value;

    const oPersons = [...this.state.persons];
    oPersons[personIndex] = selectedPerson;

    this.setState((prevState, props) => {
      return {
      persons: oPersons,
      changeCounter: prevState.changeCounter + 1
    };}
    );
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

  componentDidMount() {
    console.log("[App.js] Component did mount..");
  }

  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true; // default is true
  }

  loginHandler = () => {
    this.setState({authenticated:true})
  }

  render() {
    console.log("[App.js] Render");

    let personsDiv = null;

    if (this.state.showPersons) {
      personsDiv = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonHandler}
              title={this.props.appTitle}
            />
          ) : null}
          {personsDiv}
        </AuthContext.Provider>
      </Aux>
    );
  }
}
export default withClass(App, classes.App);
