import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "services/Api";
const API_ENDPOINT = "contacts";

const getContacts = createAsyncThunk("contacts/getContactsStatus", () =>
  api.getData(API_ENDPOINT)
);

const addContact = createAsyncThunk(
  "contacts/addContactsStatus",
  (newContact) => api.saveItem(API_ENDPOINT, newContact)
);

const editContacts = createAsyncThunk(
  "contacts/editContactsStatus",
  (editContact) => api.editItem(API_ENDPOINT, editContact)
);

const deleteContacts = createAsyncThunk(
  "contacts/deleteContactsStatus",
  (deleteId) => api.deleteItem(API_ENDPOINT, deleteId)
);

export { getContacts, addContact, editContacts, deleteContacts };
