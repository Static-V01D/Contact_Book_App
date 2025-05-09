import React from 'react';
import { Card, Avatar, IconButton, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ContactCard = ({ contact }) => {
  const navigation = useNavigation();
  const initial = contact.name?.charAt(0)?.toUpperCase() || '?';

  return (
    <Card style={{ marginVertical: 8 }}>
      <Card.Title
        title={contact.name}
        subtitle={contact.phone}
        left={(props) => <Avatar.Text {...props} label={initial} />}
      />
      <Card.Content>
        {contact.email && <Text>Email: {contact.email}</Text>}
      </Card.Content>
      <Card.Actions>
        <IconButton icon="eye" onPress={() => navigation.navigate('ContactView', { contactId: contact.id })} />
        <IconButton icon="pencil" onPress={() => navigation.navigate('ContactForm', { contactId: contact.id })} />
      </Card.Actions>
    </Card>
  );
};

export default ContactCard;

// This code defines a ContactCard component that displays a contact's information in a card format using React Native Paper's Card component. The card includes the contact's name, phone number, and email (if available). It also features an avatar displaying the first letter of the contact's name. The component provides two action buttons: one for viewing the contact's details and another for editing the contact. These buttons navigate to the respective screens using React Navigation, passing the contactId as a parameter. The component is styled with margins for better spacing and uses icons for a more intuitive user interface.
// The ContactCard component is reusable and can be used in lists or grids to display multiple contacts, making it a versatile part of a contact management application. It enhances user experience by providing quick access to contact details and editing options directly from the card interface.