import s from "./InputContacts.module.css";
import { useState } from "react";

import { nanoid } from "nanoid";

const InputContacts = ({ mainContacts, onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");

  const handleChange = (e) => {
    console.log(`e.target`, e.target.name);
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;

      default:
        return;
    }
    setId(nanoid(5));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mainContacts.some(({ newName }) => newName === e.target.value)
      ? alert(`${name} is alredy in contact`)
      : onSubmit({ name, number, id });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
    setId("");
  };
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="" className={s.label}>
          name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="" className={s.label}>
          number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className={s.button}>
          add contact
        </button>
      </form>
    </div>
  );
};

export default InputContacts;
