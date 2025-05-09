import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Button, Snackbar, Dialog, Portal, Text } from 'react-native-paper';
import { ContactsContext } from '../context/ContactsContext';
import ContactForm from '../components/ContactForm';

const ContactFormScreen = ({ navigation, route }) => {
  const { contactId } = route.params || {};
  const {
    addContact,
    updateContact,
    deleteContact,
    getContactById
  } = useContext(ContactsContext);

  const contact = contactId ? getContactById(contactId) : {};

  const [error, setError] = useState('');
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [snackVisible, setSnackVisible] = useState(false);

  const handleSubmit = async (newContact) => {
    try {
      if (contactId) {
        await updateContact(newContact);
      } else {
        await addContact(newContact);
      }
      navigation.goBack();
    } catch (e) {
      setError(e.message);
    }
  };

  const handleDelete = () => {
    deleteContact(contactId);
    setConfirmVisible(false);
    setSnackVisible(true);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ContactForm contact={contact} onSubmit={handleSubmit} />

      {contactId && (
        <Button
          mode="contained"
          onPress={() => setConfirmVisible(true)}
          buttonColor="#D32F2F"
          textColor="white"
          style={{ marginTop: 24 }}
        >
          Delete Contact
        </Button>
      )}

      {/* Delete confirmation dialog */}
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

      {/* Floating error/snack message */}
      <Snackbar
        visible={!!error || snackVisible}
        onDismiss={() => {
          setError('');
          setSnackVisible(false);
        }}
        duration={3000}
        style={{
          position: 'absolute',
          bottom: 80,
          left: 16,
          right: 16,
          backgroundColor: error ? '#D32F2F' : '#323232',
          borderRadius: 8,
          elevation: 6
        }}
      >
        {error || 'Contact deleted'}
      </Snackbar>
    </View>
  );
};

export default ContactFormScreen;


// This code defines a ContactFormScreen component that allows users to add or update contacts. It uses the ContactsContext to manage the state of contacts and handle errors using a Snackbar for user feedback. The component conditionally renders a ContactForm based on whether a contactId is provided in the route params, indicating whether the user is adding a new contact or editing an existing one.
// The handleSubmit function is responsible for either adding a new contact or updating an existing one, and it handles any errors that may occur during this process. The Snackbar component is used to display error messages to the user in a non-intrusive way.