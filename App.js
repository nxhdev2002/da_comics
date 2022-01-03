import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login_Screen from './Components/Login'
import infoComicScreen from './Components/InfoComicScreen';
import reading_screen from './Components/ReadingScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login_Screen">
        <Stack.Screen name="Login_Screen" component={Login_Screen} options={{headerShown: false}} />
        <Stack.Screen name="infoComicScreen" component={infoComicScreen} options={{headerShown: false}} />
        <Stack.Screen name="reading_screen" component={reading_screen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
