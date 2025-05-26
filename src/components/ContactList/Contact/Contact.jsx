import React from "react";
import { FaCat } from "react-icons/fa";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";

const Contact = ({ data: { id, name, number }}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={styles.contactCard}>
      <FaCat size={30} style={{ color: "#333" }} className={styles.icon} />
      <div className={styles.infoBox}>
        <p className={styles.name}>{name}</p>
        <p className={styles.number}>{number}</p>
      </div>
      <button onClick={handleDelete} className={styles.button}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
