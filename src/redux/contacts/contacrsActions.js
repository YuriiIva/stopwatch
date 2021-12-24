import { createAction, nanoid } from "@reduxjs/toolkit";

const addContactsR = createAction("contacts/items_add", (contacts) => ({
  payload: {
    ...contacts,
    id: nanoid(),
    // createdAt: new Date().toISOString(),
  },
}));

// const deleteContacts = createAction("contacts/items_delete");
const changeFilter = createAction("contacts/filter_change");

export { changeFilter };
