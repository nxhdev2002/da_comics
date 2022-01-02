import React from 'react';
import { Text } from 'react-native';



const Profile = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);
    return (
        <Text>Hello</Text>
    )
}

export default Profile;