import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login_Screen from './Components/Login'
import Navigation from './Components/Screen'
import SplashScreen from './Components/SplashScreen'
import {infoComicScreen, infoAdultScreen} from './Components/InfoComicScreen';
import reading_screen from './Components/ReadingScreen';
import codePush from "react-native-code-push";

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login_Screen" component={Login_Screen} options={{headerShown: false}} />
        <Stack.Screen name="infoComicScreen" component={infoComicScreen} options={{headerShown: false}} />
        <Stack.Screen name="infoAdultScreen" component={infoAdultScreen} options={{headerShown: false}} />
        <Stack.Screen name="reading_screen" component={reading_screen} options={{headerShown: false}} />
        <Stack.Screen name="Navigation" component={Navigation} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default codePush(codePushOptions)(App);
