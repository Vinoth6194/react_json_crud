import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
const ContactList = props => {
  console.log('ContactList Props');
  console.log(props);

  // const contacts = [
  //   {
  //     id: '1',
  //     name: 'Dummy',
  //     email: 'Dummy@gmail.com',
  //   },
  // ];
  //* asigned the delete func prop
  const deleteContactHandler = id => {
    props.getContactId(id);
  };
  // const renderContactList = props.contacts.map(contact => {
  //   return <ContactCard contact={contact} />;
  // });
  const renderContactList = props.contacts.map(contact => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="main">
      <h2>
        Contacts List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search Contacts"
            className="prompt"
          ></input>
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
