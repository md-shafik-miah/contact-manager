import React,{useState,useEffect} from "react";
import "./App.css";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import Header from "./Components/Header";


function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])
  const addContactHandler =(contact)=> {
    console.log(contact);
    setContacts([...contacts,contact])
  }

  const removeContactHandler = (index) => {
    const newContactList = contacts.filter((contact) => {
      return contact.index !== index;
    })
    setContacts(newContactList);
  }

  useEffect(() => {
    const retrivedContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrivedContact)setContacts(retrivedContact);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

 



  return (
    <>
      <div className='app container'>
        <Header/> 
        <AddContact addContactHandler = {addContactHandler}/>
        <ContactList contacts= {contacts} getContactIndex = {removeContactHandler}/>
        
      </div>
    </>
  );
}

export default App;
