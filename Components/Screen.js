import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
import Home from './Home';
import AdultScreen from './AdultScreen';

export default function Navigation() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <Icon name="home" size={15} color="green" />
                  )
                }} />
            {/* <Tab.Screen name="Adult_Comics" component={AdultScreen} options={{
                    tabBarLabel: '18+',
                    tabBarIcon: () => (
                        <Icon name="ban" size={15} color="green" />
                ),
            }} /> */}
        </Tab.Navigator>
    )
}