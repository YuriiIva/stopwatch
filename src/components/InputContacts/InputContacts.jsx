import s from "./InputContacts.module.css";
import { Component } from "react";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
  name: "",
  number: "",
  id: "",
};

class InputContacts extends Component {
  state = { ...INITIAL_STATE };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      id: nanoid(5),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => this.setState({ ...INITIAL_STATE });

  render() {
    return (
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label htmlFor="" className={s.label}>
            name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.handleChange}
              required
            />
          </label>
          <label htmlFor="" className={s.label}>
            number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.handleChange}
              required
            />
          </label>

          <button type="submit" className={s.button}>
            add contact
          </button>
        </form>
      </div>
    );
  }
}

export default InputContacts;
