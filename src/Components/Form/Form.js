import React from 'react';
import shortid from 'shortid';
import styles from './form.module.css';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  hendleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.nameInputId} className={styles.label}>
          Name:
          <input
            id={this.nameInputId}
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.hendleChange}
            className={styles.input}
          />
        </label>
        <label htmlFor={this.numberInputId} className={styles.label}>
          Number:
          <input
            id={this.numberInputId}
            name="number"
            type="text"
            value={this.state.number}
            onChange={this.hendleChange}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.btn_add}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
