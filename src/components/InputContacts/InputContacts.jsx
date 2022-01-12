import s from "./InputContacts.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiBookCover } from "react-icons/gi";

import { contactsOperations } from "redux/contacts";

const InputContacts = () => {
  const contacts = useSelector((state) => state.contacts.data.items);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");
  const [newContact, setNewContact] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!newContact) return;

    dispatch(contactsOperations.addContact(newContact));
  }, [dispatch, newContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some((contact) => name === contact.name)) {
      alert(`${name} is alredy in contact`);
      return;
    }
    setNewContact({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
    setId("");
  };
  return (
    <div>
      <h1 className={s.title}>
        <GiBookCover />
        Phonebook
      </h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="" className={s.label}>
          name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="" className={s.label}>
          phone
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={(e) => setNumber(e.target.value)}
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
