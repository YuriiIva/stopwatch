import { useSelector, useDispatch } from "react-redux";

import Contacts from "../Contacts /Contacts ";
import FindContacts from "../FindContacts/FindContacts";
import InputContacts from "../InputContacts/InputContacts";
import { useEffect } from "react";
import { contactsOperations } from "redux/contacts";

const { getContacts, deleteContacts } = contactsOperations;

const App = () => {
  const contacts = useSelector((state) => state.contacts.data.items);
  const filter = useSelector((state) => state.contacts.filter);
  // const error = useSelector((state) => state.contacts.data.error);
  // const loading = useSelector((state) => state.contacts.data.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const getFilterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDaleteCard = (idDelete) => {
    dispatch(deleteContacts(idDelete));
  };

  return (
    <div className="main">
      <InputContacts />
      <FindContacts />
      <Contacts items={getFilterContacts(filter)} onDaleteCard={onDaleteCard} />
    </div>
  );
};

export default App;
