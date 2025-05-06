import { useEffect, useState } from 'react'; 
import { FlatList, View } from 'react-native'; 
import { FAB } from 'react-native-paper'; 
import ContactListItem from '../components/ContactListItem'; 
 
const ContactListScreen = ({navigation}) => { 
  const [contacts, setContacts] = useState([]); 
 
  useEffect(() => { 
    // TODO: fetch contacts from database and setContacts 
  }, []); 
 
  const renderItem = ({ item }) => ( 
    <ContactListItem  
      contact={item}  
      onPress={() => navigation.navigate('ViewContact', { contactId: item.id })} 
    /> 
  ); 
 
  return ( 
    <View style={{ flex: 1 }}> 
      {/* FlatList to render all contacts */} 
      <FlatList  
        data={contacts} 
        keyExtractor={(item) => item.id.toString()} 
        renderItem={renderItem} 
      /> 
      {/* FAB to add a new contact */} 
      <FAB 
        icon="plus" 
        style={{ position: 'absolute', bottom: 16, right: 16 }} 
        onPress={() => navigation.navigate('AddContact')} 
      /> 
    </View> 
  ); 
}; 
 
export default ContactListScreen; 