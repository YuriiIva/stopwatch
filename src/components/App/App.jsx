import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addContactsR,
  deleteContacts,
} from "../../redux/contacts/contacrsActions";
import Contacts from "../Contacts /Contacts ";
import FindContacts from "../FindContacts/FindContacts";
import InputContacts from "../InputContacts/InputContacts";

import { get, save } from "../../services/localStorage";

const CONTACTS_KEY = "contacts";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    save(CONTACTS_KEY, contacts);
  }, [contacts]);

  const addContacts = (newContacts) => {
    dispatch(addContactsR(newContacts));
  };

  const getFilterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDaleteCard = (idDelete) => {
    dispatch(deleteContacts(idDelete));
  };

  return (
    <div>
      <InputContacts onSubmit={addContacts} />
      <FindContacts />
      <Contacts items={getFilterContacts(filter)} onDaleteCard={onDaleteCard} />
    </div>
  );
};

export default App;
