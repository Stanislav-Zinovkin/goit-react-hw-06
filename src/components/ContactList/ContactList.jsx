import React from "react";
import Contact from "./Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from  "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name.toLowerCase());
  const filteredContacts = contacts.filter( contact => contact.name.toLowerCase().includes(filter));
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <ul className={styles.contactList}>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default ContactList;
