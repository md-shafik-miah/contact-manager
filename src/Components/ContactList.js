import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts,getContactIndex }) => {

   const deleteContactHandler = (index) => {
    getContactIndex(index)
   }
   
  const lists = contacts.map((contact,index) => {
    return (
      <ContactCard contact={contact} key= {index} clickHandler={deleteContactHandler}/>
    );
  });
  return (
    <div>
      <h1>Contact Lists</h1>
      {lists}
    </div>
  );
};

export default ContactList;
