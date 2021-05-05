import { useEffect, useState } from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactDetail from './ContactDetail';
import api from '../api/contacts';
function App() {
  // const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  // const addContactHandler = contact => {
  //   console.log('From App.js');
  //   console.log(contact);
  //   setContacts([...contacts, { id: uuid(), ...contact }]);
  // };

  //*retrieve contacts from api
  const retriveContacts = async () => {
    const response = await api.get('/contacts');
    console.log('Response from API');
    console.log(response);
    return response.data;
  };

  //* Add contacts to the api
  const addContactHandler = async contact => {
    console.log('Data to be added to the api');
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post('/contacts', request);
    setContacts([...contacts, response.data]);
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
  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) {
        setContacts(allContacts);
      }
    };
    getAllContacts();
  }, []);
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
      //*{' '}
      {/* passing the props in arrow fun with component prop in router leads to execcution of anonymous fun every time thus leading to perfomance issue */}
      <Router>
        <Header />
        <Switch>
          <Route
            path="/add"
            render={props => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route
            path="/"
            exact
            render={props => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />

          <Route path="/contact/:id" component={ContactDetail}></Route>
        </Switch>

        {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
