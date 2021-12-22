import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContactsR, deleteContacts, changeFilter } from "./contacrsActions";

const contactsFirst = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

// console.dir(addContactsR.type) ///"contacts/items_delete"
// console.dir(addContactsR.toString) ///"contacts/items_delete"

// 1 way

// const itemsReducer = createReducer(contactsFirst, {
//   [addContactsR]: (state, action) => [...state, action.payload],
//   [deleteContacts]: (state, action) =>
//     state.filter((contact) => contact.id !== action.payload),
// });

// const filterReducer = createReducer("", {
//   [changeFilter]: (state, action) => action.payload,
// });

// 2 way

const itemsReducer = createReducer(contactsFirst, (builder) => {
  builder
    .addCase(addContactsR, (state, action) => [...state, action.payload])
    .addCase(deleteContacts, (state, action) =>
      state.filter((contact) => contact.id !== action.payload)
    );
});

const filterReducer = createReducer("", (builder) => {
  builder.addCase(changeFilter, (state, action) => action.payload);
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
export default contactsReducer;
