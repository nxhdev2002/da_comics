import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => { 
  const [is_loading, set_loading_status] = useState(true);
  const [data, setData] = useState('')
  const get_data = async () => {
    const rs = await AsyncStorage.getItem('is_login')
    set_loading_status(false)
    setData(rs)
  }
  useEffect(() => {
    get_data()
    if (!is_loading)
      if (data == '1') {
        navigation.navigate("Navigation")
      } else {
        navigation.navigate("Login_Screen")
      }
  }, [data])
  const viewStyles = [
    { backgroundColor: 'orange' }
  ];
  const textStyles = {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  };

  return (
    <View style={viewStyles}>
      <Text style={textStyles}>
        Splash Screen
      </Text>
    </View>
  );
}

export default SplashScreen;