import React from 'react';
import { Text } from 'react-native';



const Profile = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);
    return (
        <Text>This is the profile page 2</Text>
    )
}

export default Profile;