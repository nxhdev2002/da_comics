import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableWithoutFeedback, BackHandler, Alert} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import {search} from '../apis/search'

const styles = StyleSheet.create({
    header: {
        // position: 'absolute', 
        // top: 5, 
        paddingTop: 5,
        flex: 1, 
        justifyContent: 'space-around',
        alignItems: 'center',
        // right: '15%', 
        // left: '15%',
        flexDirection:'row',
        flexWrap:'wrap',
        elevation: 99,
    },
    searchContainer: {
        // position: 'absolute', 
        borderColor:'green',
        borderWidth: 1,
        borderRadius: 50,
        flex: 3, 
        flexDirection:'row',
        flexWrap:'wrap',
        alignSelf: 'stretch', 
        // right: '15%', 
        // left: '15%',
    },
    searchBox: {
        top: '10%',
        padding: 50,
    },
    searchRs: {
        padding: 60,
    },
    headIcon: {
        flex: 1.5, 
        textAlign:'center', 
        justifyContent:'center',
        width:50,
        paddingRight:0
    },
    app: {
        flex: 2
    }
})


const Home = ({ navigation }) => {
    const [defaultStyle, setDefaultStyle] = useState();
    const [searchRs, setSearchRs] = useState([]);
    useFocusEffect (() => {
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      });
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);
    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <Icon name="list" size={15} color="green" style={styles.headIcon}/>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={15} color="green" style={{padding: 20}}/>
                    <TextInput
                        placeholder={"Tìm kiếm"}
                        onChangeText={async (text) => {setSearchRs(await search(text));  setDefaultStyle({display: 'flex'})}}
                    />
                </View>
                <Icon name="user" size={15} color="green" style={styles.headIcon}/>
            </View>
            <ScrollView style={[{display:'none', flex: 1}, defaultStyle, styles.searchBox]}>
                    {searchRs.map(item => 
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('infoComicScreen', item)} underlayColor="white" key={item.name}>
                        <View style={styles.searchRs}>
                            <Image
                                style={{padding: 40, position: 'absolute', left: 0}}
                                source={{uri: item.thumb}} />
                                <View style={{position: 'absolute', left: '50%'}}>
                                    <Text>{item.name}</Text>
                                    <Text>Chapter: {item.newchapter}</Text>
                                    <Text>Mô tả: {item.desc}</Text>
                                </View>
                        </View>
                    </TouchableWithoutFeedback>
                    )}    
            </ScrollView>

            <View style={styles.app}>
                <Text>Truyện mới cập nhật</Text>
            </View>
        </View>
    )
}

export default Home;