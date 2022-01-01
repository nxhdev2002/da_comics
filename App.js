import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login_Screen from './Components/Login'

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login_Screen">
        <Stack.Screen name="Login_Screen" component={Login_Screen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
