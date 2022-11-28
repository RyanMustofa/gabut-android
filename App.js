import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/@containers/pages/Home';
import { ToastProvider } from 'react-native-toast-notifications'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <React.Fragment>
      <ToastProvider placement='top'>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </React.Fragment>
  )
}