import React, { Component } from "react"; // no hace falta importar { Component } porque no tenemos herencia acá.

import classes from "./Person.css";
import Aux from "../../hoc/Aux";
import withClass from "../../../Components/hoc/withClass";
import PropTypes from "prop-types";
import AuthContext from '../../context/auth-context';

//funcitonal component, or dumb component or stateless si no usea useState()

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  };

  static contextType = AuthContext; 

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated)
  }

  render() {
    console.log("[Person.js] One P rendering..");

    return (
      // <div className={classes.Person}>
      <Aux>
        {/* <AuthContext.Consumer>
        {(context) => context.authenticated ? <p>Authenticaded!!</p> : <p>Please log in</p>}
        </AuthContext.Consumer> */}
        
        {this.context.authenticated ? <p>Authenticaded!!</p> : <p>Please log in</p>}

        <p onClick={this.props.click}>
          {/* lo importante es que mediante la prop "click" estamos pasando un metodo por referencia.   */}
          I'm a {this.props.name}, and I am {this.props.age} years old.
        </p>
        <p> {this.props.children} </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          // ref={inputEl => {this.inputElement = inputEl;}}
          ref={this.inputElementRef}
        />
        {/* </div> */}
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
