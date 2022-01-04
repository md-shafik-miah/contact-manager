import React from "react";
import user from '../Images/avatar.png'

const ContactCard = ({contact,key,clickHandler}) => {
    
 
  return (
    <div className='p-3 mt-2 mb-2 rounded ListStyle'>
      <div style={{display:"flex"}}>
        <img src={user} alt="user" width="50px"/>
        <div>
          <div className='text-black p-1'>{contact.name}</div>
          <div className='text-black p-1'>{contact.phone}</div>
          <div className='text-primary p-1'>{contact.email}</div>
        </div>
      </div>
      <div>
        <i className='bi bi-trash deleteIcon'
        onClick={()=> clickHandler(key)}></i>
      </div>
    </div>
  );
};

export default ContactCard;
