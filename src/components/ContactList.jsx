import React, { useRef } from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
const ContactList = props => {
  console.log('ContactList Props');
  console.log(props);
  const inputEl = useRef('');
  // const contacts = [
  //   {
  //     id: '1',
  //     name: 'Dummy',
  //     email: 'Dummy@gmail.com',
  //   },
  // ];

  const getSearchKeyword = () => {
    console.log('Search input');
    console.log(inputEl.current.value);
    props.searchKeyword(inputEl.current.value);
  };

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
            ref={inputEl}
            onChange={getSearchKeyword}
            value={props.term}
          ></input>
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : 'No contacts based on your search'}
      </div>
    </div>
  );
};

export default ContactList;
