import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contactsSlise';
import { ContactElement } from '../ContactElement/ContactElement';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter.value);

   const filteredElement = () => {
     const normalizedFilter = filter.toLowerCase();
     return filter
       ? filterContacts.filter(contact =>
           contact.name.toLowerCase().includes(normalizedFilter)
         )
       : filterContacts;
   };
 const contacts = filteredElement()

   const deleteContact = el => {
     dispatch(removeContact(el.currentTarget.id));
   };
  return (
    <ol>
      {contacts?.map(el => {
        return <ContactElement onClick={deleteContact} key={el.id} el={el} />;
      })}
    </ol>
  );
};
