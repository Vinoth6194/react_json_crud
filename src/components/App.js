import { useEffect, useState } from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import { uuid } from 'uuidv4';
function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  const addContactHandler = contact => {
    console.log('From App.js');
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  //*Delete functionality
  const removeHandler = id => {
    const newContactList = contacts.filter(contact => {
      return contact.id !== id;
    });
    setContacts(newContactList);
    console.log('NewList');
    console.log(newContactList);
  };
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // const contacts = [
  //   {
  //     id: '1',
  //     name: 'Vinothkumar',
  //     email: 'vin6194@gmail.com',
  //   },
  //   {
  //     id: '2',
  //     name: 'Kiruthika',
  //     email: 'kiru1849@gmail.com',
  //   },
  // ];
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
