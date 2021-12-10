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
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContacts],
    }));
  };

  handleFilterChange = (value) => {
    this.setState({ filter: value });
  };

  getFilterContacts = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  onDaleteCard = (idDelete) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idDelete),
    }));
  };

  render() {
    return (
      <div>
        <InputContacts
          onSubmit={this.addContacts}
          mainContacts={this.state.contacts}
        />
        <FindContacts
          onFilterChange={this.handleFilterChange}
          value={this.state.filter}
        />
        <Contacts
          items={this.getFilterContacts()}
          onDaleteCard={this.onDaleteCard}
        />
      </div>
    );
  }
}

export default App;
