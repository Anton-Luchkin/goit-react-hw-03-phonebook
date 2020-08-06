import React from 'react';
import styles from './contactList.module.css';
import PropTypes from 'prop-types';
import Contact from './contact';

const ContactsList = ({ contact, onDeleteContact }) => (
  <>
    {contact.length > 0 ? (
      <ul className={styles.list}>
        {contact.map(contactItem => (
          <li key={contactItem.id} className={styles.list_item}>
            <Contact
              contactItem={contactItem}
              onDeleteContact={onDeleteContact}
            />
          </li>
        ))}
      </ul>
    ) : null}
  </>
);

ContactsList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
