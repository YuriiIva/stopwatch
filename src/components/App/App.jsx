import { Component } from "react";
import Contacts from "../Contacts /Contacts ";
import FindContacts from "../FindContacts/FindContacts";
import InputContacts from "../InputContacts/InputContacts";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContacts = (newContacts) => {
    // e.preventdefault();
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContacts],
    }));
  };

  render() {
    return (
      <div>
        <InputContacts onSubmit={this.addContacts} />
        <FindContacts />
        <Contacts contactsUser={this.state.contacts} />
      </div>
    );
  }
}

export default App;
