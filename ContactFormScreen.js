import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { ContactsContext } from '../context/ContactsContext';
import ContactForm from '../components/ContactForm';

const ContactFormScreen = ({ navigation, route }) => {
  const { contactId } = route.params || {};
  const { addContact, updateContact, getContactById } = useContext(ContactsContext);
  const [error, setError] = useState('');

  const contact = contactId ? getContactById(contactId) : {};

  const handleSubmit = (newContact) => {
    try {
      if (contactId) {
        updateContact(newContact);
      } else {
        addContact(newContact);
      }
      navigation.goBack();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <ContactForm contact={contact} onSubmit={handleSubmit} />
      <Snackbar visible={!!error} onDismiss={() => setError('')} duration={3000}>
        {error}
      </Snackbar>
    </View>
  );
};

export default ContactFormScreen;

// This code defines a ContactFormScreen component that allows users to add or update contacts. It uses the ContactsContext to manage the state of contacts and handle errors using a Snackbar for user feedback. The component conditionally renders a ContactForm based on whether a contactId is provided in the route params, indicating whether the user is adding a new contact or editing an existing one.
// The handleSubmit function is responsible for either adding a new contact or updating an existing one, and it handles any errors that may occur during this process. The Snackbar component is used to display error messages to the user in a non-intrusive way.