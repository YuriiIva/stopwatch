import { useState, useEffect } from "react";
import Contacts from "../Contacts /Contacts ";
import FindContacts from "../FindContacts/FindContacts";
import InputContacts from "../InputContacts/InputContacts";

import { get, save } from "../../services/localStorage";

const CONTACTS_KEY = "contacts";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const sevedContacts = get(CONTACTS_KEY);
    if (sevedContacts) {
      setContacts(sevedContacts);
    }
  }, []);

  useEffect(() => {
    save(CONTACTS_KEY, contacts);
  }, [contacts]);

  const addContacts = (newContacts) => {
    setContacts((prevState) => [...prevState, newContacts]);
  };

  const handleFilterChange = (e) => setFilter(e.target.value);

  const getFilterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDaleteCard = (idDelete) => {
    console.log(idDelete);
    setContacts((prevContacts) =>
      prevContacts.filter(({ id }) => id !== idDelete)
    );
  };

  return (
    <div>
      <InputContacts onSubmit={addContacts} mainContacts={contacts} />
      <FindContacts onFilterChange={handleFilterChange} value={filter} />
      <Contacts items={getFilterContacts(filter)} onDaleteCard={onDaleteCard} />
    </div>
  );
};

export default App;
