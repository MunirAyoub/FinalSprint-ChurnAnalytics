import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigators/TabNavigator';  
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import InicialScreen from './screens/InicialScreen';  
import AboutUsScreen from './screens/AboutUsScreen'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CompanyRegistrationScreen from './screens/CompanyRegistrationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen 
          name="Inicial" 
          component={InicialScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name="Home" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="AboutUs" 
          component={AboutUsScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CompanyRegistration" 
          component={CompanyRegistrationScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
