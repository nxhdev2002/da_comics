import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';

import login from './apis/login'
import get_follow_comics  from './apis/get_following_comics';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  tinyLogo: {
    width: 320,
    height: 300,
  },
  logo: {
    width: 66,
    height: 58,
  },
  input: {
      padding: 15,
      flexDirection:'row',
      borderBottomColor: 'red',
      borderBottomWidth: 1,
  },
  title: {
      fontWeight: "bold",
  },
  appButtonContainer: {
      bottom: '-15%',
      elevation: 8,
      backgroundColor: "orange",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
  appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
  }
});

const getData = async (set_is_login, getemail, get_list_comics) => {
  try {
    const value = await AsyncStorage.getItem('is_login')
    if (value !== '0') {
      set_is_login('1')
      email = await AsyncStorage.getItem('email')
      getemail(email)
      get_list_comics(await get_follow_comics("1"))
    } else {
      set_is_login('0')
    }
  } catch(e) {
    set_is_login('0')
  }
}


const App = () => {
  const [check_login, set_is_login] = useState(0)
  const [email, getemail] = useState('')
  const [list_comics, get_list_comics] = useState([])
  useEffect(() => {
    getData(set_is_login, getemail, get_list_comics)
  }, [])
  if (check_login == '0') {
    return (
      <View>
         <TouchableOpacity style={styles.appButtonContainer} onPress={() => login("xuanhoangv7c@gmail.com", "Caube_2k2")}>
              <Text style={styles.appButtonText}>Tiếp tục</Text>
          </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <View>
         <Text>Logged in with {email}. List truyện: </Text>
              <Picker
                style={{
                  height: 36,
                  width: 261,
                }}
              >
                <Picker.Item key={-1} label={'Search By...'} value="first" />
                <Picker.Item label="hoangdz" />
              </Picker>
         <TouchableOpacity style={styles.appButtonContainer} onPress={async () => await AsyncStorage.setItem('is_login', '0')}>
              <Text style={styles.appButtonText}>Log Out</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
export default App;
