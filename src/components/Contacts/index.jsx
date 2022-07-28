import React from 'react';
import PropTypes from 'prop-types';
const Contact =({name,number,deleteEl})=>{
    return (
        <li>
            {name}:{number}
            <button type="button" onClick={deleteEl}>Delete</button>
        </li>
    )
};
Contact.protoType = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    deleteEl: PropTypes.func.isRequired,
  };
  
  export default Contact;