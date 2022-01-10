import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { contactsOperations } from "redux/contacts";

import Contacts from "../Contacts /Contacts ";
import FindContacts from "../FindContacts/FindContacts";
import InputContacts from "../InputContacts/InputContacts";
const { getContacts, deleteContacts } = contactsOperations;

const PhoneBook = () => {
  const contacts = useSelector((state) => state.contacts.data.items);
  const filter = useSelector((state) => state.contacts.filter);
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
    <div>
      <InputContacts />
      <FindContacts />
      <Contacts items={getFilterContacts(filter)} onDaleteCard={onDaleteCard} />
    </div>
  );
};

export default PhoneBook;
