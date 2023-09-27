import PropTypes from 'prop-types';
import {nanoid} from 'nanoid'
import { Form, Label, Button } from './styles';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlise';


export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {

    e.preventDefault();
    dispatch(
      addContact({
       name: e.currentTarget.elements.name.value,
        number: e.currentTarget.elements.number.value,
        id: nanoid()
      })
    );
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
