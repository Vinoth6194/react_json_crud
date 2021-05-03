import { useEffect, useState } from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  const addContactHandler = contact => {
    console.log('From App.js');
    console.log(contact);
    setContacts([...contacts, contact]);
  };
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
