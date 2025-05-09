import React, { useContext } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { ContactsContext } from '../context/ContactsContext';

const ContactViewScreen = ({ route }) => {
  const { contactId } = route.params;
  const { getContactById } = useContext(ContactsContext);
  const contact = getContactById(contactId);

  if (!contact) return <Text>Contact not found</Text>;

  return (
    <View style={{ padding: 16 }}>
      <Text variant="titleLarge">{contact.name}</Text>
      <Text>Phone: {contact.phone}</Text>
      <Text>Email: {contact.email}</Text>
    </View>
  );
};

export default ContactViewScreen;

// This code defines a ContactViewScreen component that displays the details of a specific contact. It retrieves the contact's information using the contactId passed in the route parameters and the ContactsContext. If the contact is not found, it displays a "Contact not found" message. Otherwise, it renders the contact's name, phone number, and email address in a styled view. The component uses React Native Paper's Text component for consistent styling.
// The component is designed to be used within a navigation stack, allowing users to view contact details after selecting a contact from a list. It provides a simple and effective way to present contact information in a user-friendly format.