import TYPES from "./contactsTypes";

const addContactsR = (contact) => ({
  type: TYPES.ADD,
  payload: contact,
});

const deleteContacts = (id) => ({
  type: TYPES.DELETE,
  payload: id,
});

const changeFilter = (value) => ({
  type: TYPES.FILTER,
  payload: value,
});

export { addContactsR, deleteContacts, changeFilter };
