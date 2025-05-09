import React, { useState, useEffect } from 'react';
import { TextInput, Button } from 'react-native-paper';

const ContactForm = ({ contact = {}, onSubmit }) => {
  const [name, setName] = useState(contact.name || '');
  const [phone, setPhone] = useState(contact.phone || '');
  const [email, setEmail] = useState(contact.email || '');

  const handleSubmit = () => {
    if (!name || !phone) return; // Simple validation
    onSubmit({ ...contact, name, phone, email });
  };

  return (
    <>
      <TextInput label="Name" value={name} onChangeText={setName} style={{ marginBottom: 8 }} mode="outlined" />
      <TextInput label="Phone" value={phone} onChangeText={setPhone} style={{ marginBottom: 8 }} mode="outlined" keyboardType="phone-pad" />
      <TextInput label="Email" value={email} onChangeText={setEmail} style={{ marginBottom: 16 }} mode="outlined" keyboardType="email-address" />
      <Button mode="contained" onPress={handleSubmit}>Save</Button>
    </>
  );
};

export default ContactForm;

// This code defines a ContactForm component that allows users to input and edit contact information. It uses React Native Paper's TextInput and Button components for a consistent UI. The component accepts a contact object and an onSubmit function as props. It maintains local state for the name, phone, and email fields, initializing them with values from the contact prop if available. The handleSubmit function validates the input and calls the onSubmit function with the updated contact data when the "Save" button is pressed. The form includes basic validation to ensure that the name and phone fields are not empty before submission.
// The TextInput components are styled with margins for better spacing, and the Button is styled as a contained button for emphasis. This component can be reused in different parts of the application where contact information needs to be added or edited, promoting code reusability and consistency in design.