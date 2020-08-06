import React from 'react';
import styles from './contactList.module.css';
import PropTypes from 'prop-types';

const Contact = ({ contactItem, onDeleteContact }) => (
  <>
    <p className={styles.listItem_text}>
      {contactItem.name}: {contactItem.number}
    </p>
    <button
      type="button"
      onClick={() => onDeleteContact(contactItem.id)}
      className={styles.btn_del}
    >
      Delete
    </button>
  </>
);

Contact.propTypes = {
  contactItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
