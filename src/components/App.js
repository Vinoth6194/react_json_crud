import { useEffect, useState } from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  const addContactHandler = contact => {
    console.log('From App.js');
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  //*Delete functionality
  const removeContactHandler = id => {
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
      <Router>
        <Header />
        <Switch>
          <Route path="/add" component={AddContact} />
          <Route path="/" exact component={ContactList} />
        </Switch>

        {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
