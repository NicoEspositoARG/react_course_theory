import React from 'react';

// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );


const withClass = ( WrappedComponent, className ) =>  { // capital W coz is a component
    return props => (
        <div className={className}>
            <WrappedComponent {...props} /> 
        {/* ...props spread props passes all the key/value pairs to the wrapped component */}
        </div>
    )
}

export default withClass;