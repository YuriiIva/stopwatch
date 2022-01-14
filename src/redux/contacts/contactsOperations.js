import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "services/Api";
const API_ENDPOINT = "/contacts";

const getContacts = createAsyncThunk(
  "contacts/getContactsStatus",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getData(API_ENDPOINT);
      console.log(`data in contacts`, data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something wrong :(");
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/addContactsStatus",
  async (newContact, thunkAPI) => {
    try {
      const { data } = await api.saveItem(API_ENDPOINT, newContact);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something wrong :(");
    }
  }
);

const deleteContacts = createAsyncThunk(
  "contacts/deleteContactsStatus",
  async (deleteId, thunkAPI) => {
    try {
      await api.deleteItem(API_ENDPOINT, deleteId);
      return deleteId;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something wrong :(");
    }
  }
);

export { getContacts, addContact, deleteContacts };
