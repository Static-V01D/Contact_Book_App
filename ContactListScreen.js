import React, { useContext, useMemo } from 'react';
import { View, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';
import { ContactsContext } from '../context/ContactsContext';
import ContactCard from '../components/ContactCard';
import { red } from 'react-native-reanimated/lib/typescript/Colors';

const ContactListScreen = ({ navigation }) => {
  const { contacts } = useContext(ContactsContext);

  // Sort alphabetically by name using useMemo to optimize re-sorting
  const sortedContacts = useMemo(() =>
    [...contacts].sort((a, b) => a.name.localeCompare(b.name)),
    [contacts]
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={sortedContacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ContactCard contact={item} />}
        contentContainerStyle={{ padding: 8 }}
      />
      <FAB
        icon="plus"
        style={{ position: 'absolute', right: 16, bottom: 16, backgroundColor: '#D32F2F'}}
        onPress={() => navigation.navigate('ContactForm')}
        color="#FFFFFF" // icon color (white)
      />
    </View>
  );
};

export default ContactListScreen;

// This code defines a ContactListScreen component that displays a list of contacts using a FlatList. The contacts are sorted alphabetically by name using the useMemo hook for performance optimization. A FAB (Floating Action Button) is included to allow users to add new contacts, which navigates to the ContactForm screen when pressed. The FAB is styled with a red background and white icon color for better visibility.
// The component uses the ContactsContext to access the contacts data, ensuring that it reflects any changes made in the context. The ContactCard component is used to render each individual contact in the list.