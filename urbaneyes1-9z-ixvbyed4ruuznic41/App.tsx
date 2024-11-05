import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/(tabs)/index'; // Ruta a tu pantalla de Login
import UnirColonia from './app/(tabs)/unirColonia'; // Ruta a tu pantalla de unirColonia

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UnirColonia" component={UnirColonia} options={{ title: 'Unir a una Colonia' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
