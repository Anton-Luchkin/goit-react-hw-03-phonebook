import React from 'react';
import styles from './filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
