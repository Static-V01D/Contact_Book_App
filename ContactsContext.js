import React, { createContext, useEffect, useState } from 'react';
import { getRealm } from '../database/realm';
import 'react-native-get-random-values'; // Needed for UUID
import { v4 as uuidv4 } from 'uuid';

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const realm = await getRealm();
    const data = realm.objects('Contact').sorted('name');
    setContacts([...data]);
  };

  const addContact = async ({ name, phone, email }) => {
    const realm = await getRealm();

    const exists = realm.objects('Contact').filtered(
      'name == $0', name.trim()
    ).length > 0;

    if (exists) {
      throw new Error('A contact with this name already exists.');
    }

    realm.write(() => {
      realm.create('Contact', {
        id: uuidv4(),
        name,
        phone,
        email,
        createdAt: new Date(),
      });
    });

    loadContacts();
  };

  const updateContact = async (updated) => {
    const realm = await getRealm();
    realm.write(() => {
      realm.create('Contact', updated, Realm.UpdateMode.Modified);
    });
    loadContacts();
  };

  const deleteContact = async (id) => {
    const realm = await getRealm();
    realm.write(() => {
      const target = realm.objectForPrimaryKey('Contact', id);
      if (target) realm.delete(target);
    });
    loadContacts();
  };

  const getContactById = (id) => {
    return contacts.find((c) => c.id === id);
  };

  return (
    <ContactsContext.Provider value={{
      contacts,
      addContact,
      updateContact,
      deleteContact,
      getContactById
    }}>
      {children}
    </ContactsContext.Provider>
  );
};


// This code defines a ContactsContext using React's Context API to manage a list of contacts. The ContactsProvider component maintains the state of contacts and provides functions to add, update, delete, and retrieve contacts by ID. The addContact function checks for duplicate names before adding a new contact, throwing an error if a duplicate is found. The context can be used throughout the application to access and manipulate the contacts data in a consistent manner.
// The ContactsProvider wraps the application, allowing any child component to access the contacts state and functions through the ContactsContext. This approach promotes a clean separation of concerns and makes it easier to manage contact-related logic in a centralized location.
// The context is designed to be used with React's useContext hook, enabling components to consume the context values easily. This pattern is commonly used in React applications to manage global state and share data between components without prop drilling.
// The use of Realm for local database management allows for efficient data storage and retrieval, making it suitable for applications that require persistent data across sessions. The use of UUIDs for unique contact IDs ensures that each contact can be uniquely identified, even if they have the same name.
// The code also includes error handling for duplicate contacts, providing a better user experience by preventing the addition of contacts with the same name. The use of async/await syntax for database operations ensures that the code is clean and easy to read, while also handling asynchronous operations effectively.