import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import contactsReducer from "./contacts/contactsReducer";

const rootReducers = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducers, devToolsEnhancer());

export default store;
