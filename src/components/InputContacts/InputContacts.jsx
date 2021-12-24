import s from "./InputContacts.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiBookCover } from "react-icons/gi";

import { contactsOperations } from "redux/contacts";

import { nanoid } from "nanoid";

const InputContacts = () => {
  const contacts = useSelector((state) => state.contacts.data.items);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [newContact, setNewContact] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.addContact(newContact));
  }, [dispatch, newContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some((contact) => name === contact.name)) {
      alert(`${name} is alredy in contact`);
      return;
    }
    setNewContact({ name, phone });
    reset();
  };

  const reset = () => {
    setName("");
    setPhone("");
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
            name="phone"
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={(e) => setPhone(e.target.value)}
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
