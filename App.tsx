import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import ContactListScreen from './screens/ContactListScreen'; 
import AddContactScreen from './screens/AddContactScreen'; 
import EditContactScreen from './screens/EditContactScreen'; 
import { Provider as PaperProvider } from 'react-native-paper'; 
 
const Stack = createNativeStackNavigator(); 
 
export default function App() { 
  return ( 
    <PaperProvider> 
      <NavigationContainer> 
        <Stack.Navigator initialRouteName="ContactsList"> 
          <Stack.Screen 
            name="ContactsList" 
            component={ContactListScreen} 
            options={{ title: 'Contacts' }} 
          /> 
          <Stack.Screen 
            name="ContactView" 
            component={ContactViewScreen} 
            options={{ title: 'View Contact' }} 
          /> 
          <Stack.Screen 
            name="ContactForm" 
            component={ContactFormScreen} 
            options={{ title: 'Edit Contact' }} 
          /> 
        </Stack.Navigator> 
      </NavigationContainer> 
    </PaperProvider> 
  ); 
} 