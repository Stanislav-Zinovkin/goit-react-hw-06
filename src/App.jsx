import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid/non-secure";
import Contactform from "./components/ContactForm";
import contactList from "./contactList.json";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox";

const LOCAL_STORAGE_KEY = "phonebook";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : contactList;
  });
  const [search, setSearch] = useState("");
  const saveToLocalStorage = (updatedContacts) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
  };
  useEffect(() => {
    if (contacts.length > 0) {
      saveToLocalStorage(contacts);
    }
  }, [contacts]);
  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(updatedContacts);
  };

  const addContact = ({ name, number }) => {
    const newCon = {
      id: nanoid(),
      name,
      number,
    };
    const updatedContacts = [...contacts, newCon];
    setContacts(updatedContacts);
  };
  const filterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Contactform onAddContact={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filterContact} onDelete={deleteContact} />
    </div>
  );
}

export default App;
