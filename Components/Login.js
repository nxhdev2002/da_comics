import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image} from 'react-native';
import { TextInput } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from './Screen';
import login from '../apis/login'
import register from '../apis/register'

const Stack = createStackNavigator();

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
      height: 60,
      borderWidth: 0.5,
      borderColor: 'red',
      borderRadius: 5,
      width: 300,
      alignSelf: "center",
    //   flexDirection:'row',
      borderBottomColor: 'red',
      marginTop: '5%',
    //   borderBottomWidth: 1,
  },
  title: {
      fontWeight: "bold",
  },
  appLoginButton: {
      bottom: '-15%',
      width: 120,
      alignSelf: "center",
      elevation: 8,
      backgroundColor: "orange",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12
  },
  appRegisterButton: {
      bottom: '-20%',
      width: 200,
      alignSelf: "center",
      elevation: 8,
      backgroundColor: "orange",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12
  },
  appLogoutButton: {
      bottom: '-20%',
      width: 200,
      alignSelf: "center",
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

const get_follow_comics = () => {}
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

const Login_Screen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);
    const [check_login, set_is_login] = useState(0)
    const [email, getemail] = useState('')
    const [list_comics, get_list_comics] = useState([])
    const [user, onChangeUser] = React.useState(null);
    const [password, onChangePasswd] = React.useState(null);
    useEffect(() => {
        getData(set_is_login, getemail, get_list_comics)
    }, [])
    if (check_login == '0') {
        return (
            <SafeAreaView style={{marginTop: '40%'}}>
                <View>
                <Image
                    style={{height:150, width: 150, alignSelf: "center", borderRadius: 8}}
                    source={{
                    uri: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/268426811_995039638027636_5962554827666651111_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=XapqneeU5_MAX_48nJw&_nc_ht=scontent.fhan3-1.fna&oh=03_AVJbVl3HtZ00D9ZL1mSMsMPfj5aV4s-Z-C1wJU5OzV0hiA&oe=61F2E8D5',
                    }}
                />
                </View>
                <TextInput
                    label="Tên đăng nhập"
                    onChangeText={onChangeUser}
                    value={user}
                    mode={'flat'}
                    style={styles.input}
                />
                <TextInput
                    label="Mật khẩu"
                    onChangeText={onChangePasswd}
                    value={password}
                    mode={'flat'}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.appLoginButton} onPress={() => login(user, password)}>
                    <Text style={styles.appButtonText}>Tiếp tục</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.appRegisterButton} onPress={() => register(user, password)}>
                    <Text style={styles.appButtonText}>Tạo tài khoản</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    } else {
      return (
          <Stack.Navigator>
            <Stack.Screen name="Navigation" component={Navigation} options={{headerShown: false}}/>
          </Stack.Navigator>
      )
    }
}

export default Login_Screen;