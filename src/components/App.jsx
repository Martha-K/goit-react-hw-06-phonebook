import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../redux/contactsSlise';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const filterContacts = useSelector(state => state.contacts);
  
  const deleteContact = name => {
    dispatch(removeContact(name.currentTarget.name));
  };

  const formSubmitHandle = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    for (const el of contacts) {
      if (el.name.toLowerCase() === contact.name.toLowerCase()) {
        return alert(`${el.name} is already in contacts.`);
      }
    }
    setContacts(prevState => [...prevState, contact]);
  };

  const filteredElement = () => {
    const normalizedFilter = filter.toLowerCase();
    return filter
      ? filterContacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      : filterContacts;
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandle} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList onClick={deleteContact} contacts={filteredElement()} />
    </div>
  );
};
