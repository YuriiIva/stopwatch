import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContactsR, deleteContacts, changeFilter } from "./contacrsActions";

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

const itemsReducer = createReducer([], (builder) => {
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
