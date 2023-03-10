import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'components/App.styled';
import { TotalContacts } from './TotalContacts/TotalContacts';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <TotalContacts />

      <Filter></Filter>

      <ContactList></ContactList>
    </Container>
  );
};
