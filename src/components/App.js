import { useState } from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';

function App() {
  const [contacts, setContacts] = useState([]);
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
      <AddContact />
      {/* <ContactList contacts={contacts} /> */}
    </div>
  );
}

export default App;
