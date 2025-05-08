import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';

import ContactListScreen from './src/screens/ContactListScreen';
import ContactViewScreen from './src/screens/ContactViewScreen';
import ContactFormScreen from './src/screens/ContactFormScreen';
import { ContactsProvider } from './src/context/ContactsContext';


const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#D32F2F',     // red (main app color)
    secondary: '#FFCDD2',   // light red accent
    background: '#FFF5F5',  // light background
    surface: '#FFFFFF',     // card surfaces
    error: '#B00020',       // standard error
    onPrimary: '#FFFFFF',   // text/icon on red
    onSurface: '#000000',
  },
};
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContactsProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ContactsList">
            <Stack.Screen name="ContactsList" component={ContactListScreen} />
            <Stack.Screen name="ContactView" component={ContactViewScreen} />
            <Stack.Screen name="ContactForm" component={ContactFormScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ContactsProvider>
  );
}
