import PropTypes from 'prop-types';


import { ContactElement } from '../ContactElement/ContactElement';

export const ContactList = ({ onClick, contacts }) => {
  return (
    <ol>
      {contacts?.map(el => {
        return <ContactElement onClick={onClick} key={el.id} el={el} />;
      })}
    </ol>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired
};