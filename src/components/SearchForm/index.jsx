import React from 'react';
import PropTypes from 'prop-types';


const SearchForm = ({ onChange }) => (
  <label>
    Find Contacts by Name
    <input type="text" onChange={onChange} />
  </label>
);

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default SearchForm;