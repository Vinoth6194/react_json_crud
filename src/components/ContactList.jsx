import React from 'react';
import ContactCard from './ContactCard';

const ContactList = props => {
  console.log(props);

  //* asigned the delete func prop
  const deleteContactHandler = id => {
    props.getContactId(id);
  };
  // const renderContactList = props.contacts.map(contact => {
  //   return <ContactCard contact={contact} />;
  // });
  const renderContactList = props.contacts.map(contact => {
    return <ContactCard contact={contact} />;
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
