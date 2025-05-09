import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Text, Button, Dialog, Portal, Snackbar } from 'react-native-paper';
import { ContactsContext } from '../context/ContactsContext';

const ContactViewScreen = ({ route, navigation }) => {
  const { contactId } = route.params;
  const { getContactById, deleteContact } = useContext(ContactsContext);
  const contact = getContactById(contactId);

  const [confirmVisible, setConfirmVisible] = useState(false);
  const [snack, setSnack] = useState(false);

  const handleDelete = () => {
    deleteContact(contactId);
    setConfirmVisible(false);
    setSnack(true);
    navigation.goBack();
  };

  if (!contact) return <Text>Contact not found</Text>;

  return (
    <View style={{ padding: 16 }}>
      <Text variant="titleLarge">{contact.name}</Text>
      <Text>Phone: {contact.phone}</Text>
      <Text>Email: {contact.email}</Text>

      <Button
        mode="contained"
        buttonColor="#D32F2F"
        textColor="white"
        style={{ marginTop: 24 }}
        onPress={() => setConfirmVisible(true)}
      >
        Delete Contact
      </Button>

      {/* Confirm Dialog */}
      <Portal>
        <Dialog visible={confirmVisible} onDismiss={() => setConfirmVisible(false)}>
          <Dialog.Title>Delete Contact</Dialog.Title>
          <Dialog.Content>
            <Text>Are you sure you want to delete this contact?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setConfirmVisible(false)}>Cancel</Button>
            <Button onPress={handleDelete}>Delete</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      {/* Feedback */}
      <Snackbar visible={snack} onDismiss={() => setSnack(false)} duration={2000}>
        Contact deleted
      </Snackbar>
    </View>
  );
};

export default ContactViewScreen;


// This code defines a ContactViewScreen component that displays the details of a specific contact. It retrieves the contact's information using the contactId passed in the route parameters and the ContactsContext. If the contact is not found, it displays a "Contact not found" message. Otherwise, it renders the contact's name, phone number, and email address in a styled view. The component uses React Native Paper's Text component for consistent styling.
// The component is designed to be used within a navigation stack, allowing users to view contact details after selecting a contact from a list. It provides a simple and effective way to present contact information in a user-friendly format.