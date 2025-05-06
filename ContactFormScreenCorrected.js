import { View } from 'react-native'; 
import ContactForm from '../components/ContactForm'; 

const ContactFormScreen = ({ navigation, contact }) => { 
  const onSubmit = ({ name, phone, email }) => { 
    // TODO: save contacts to database, update state, and 
    // navigate back to the ContactListScreen 
    console.log('Saving contact:', { name, phone, email });
    navigation.navigate('ContactListScreen'); // Example navigation
  }; 

  return ( 
    <View style={{ flex: 1 }}> 
      <ContactForm contact={contact} onSubmit={onSubmit} /> 
    </View> 
  ); 
}; 

export default ContactFormScreen;