import React from 'react';
import ContactCard from './ContactCard';

const ContactList = props => {
  console.log('ContactList Props');
  console.log(props);

  const contacts = [
    {
      id: '1',
      name: 'Dummy',
      email: 'Dummy@gmail.com',
    },
  ];
  //* asigned the delete func prop
  const deleteContactHandler = id => {
    props.getContactId(id);
  };
  // const renderContactList = props.contacts.map(contact => {
  //   return <ContactCard contact={contact} />;
  // });
  const renderContactList = contacts.map(contact => {
    return (
      <>
        <h2 c>Contacts List</h2>
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
        />
      </>
    );
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
