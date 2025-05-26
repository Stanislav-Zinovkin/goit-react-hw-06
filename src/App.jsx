import React from "react";
import Contactform from "./components/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Contactform />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
