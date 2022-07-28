import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contacts/index';
import { useStyles } from './styles';
const ContactList = ({ contactArrey, onDeleteEl }) => {
  const styles = useStyles()
  return (
    <ul className={styles.list}>
      {contactArrey.map(({ uId, name, number }) => {
        return (
          <Contact
            key={uId}
            name={name}
            number={number}
            deleteEl={() => onDeleteEl(uId)}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactArrey: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteEl: PropTypes.func.isRequired,
};
export default ContactList;