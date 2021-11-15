import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import login from './apis/login'

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
const App = () => {
  return (
    <View>
       <TouchableOpacity style={styles.appButtonContainer} onPress={() => login("xuanhoangv7c@gmail.com", "Caube_2k2")}>
            <Text style={styles.appButtonText}>Tiếp tục</Text>
        </TouchableOpacity>
    </View>
  )
}
export default App;
