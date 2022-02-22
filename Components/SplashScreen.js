import React, {useEffect, useState} from 'react'
import {View, Text, Dimensions} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Image from 'react-native-scalable-image'

const SplashScreen = ({navigation}) => { 
  const [is_loading, set_loading_status] = useState(true);
  const [data, setData] = useState('')
  const get_data = async () => {
    const rs = await AsyncStorage.getItem('is_login')
    set_loading_status(false)
    setTimeout(() => {setData(rs)}, 1000)
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
  { backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
  ];
  return (
    <View style={viewStyles}>
      <Image
        width={Dimensions.get('window').width}
        style={{borderRadius: Dimensions.get('window').width / 2}}
        // height will be calculated automatically
        source={{uri: 'https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/273579511_3027156484279711_1844956534843447760_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=WMZus5z2LmkAX-H-ctc&_nc_ht=scontent.fhan3-5.fna&oh=00_AT_NX4aGHyw3KC0j05KvR9cdnjEinyzHV4fLm6ux-oFDjg&oe=62191F16'}}
      />
      <Text style={{padding: 50}}>DA Comics by nxhdev2002</Text>
    </View>
  );
}

export default SplashScreen;