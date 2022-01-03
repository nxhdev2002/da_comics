import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import search from '../apis/search'

const styles = StyleSheet.create({
    header: {
        position: 'absolute', 
        top: 5, 
        flex: 1, 
        alignSelf: 'stretch', 
        right: '15%', 
        left: '15%',
        flexDirection:'row',
        flexWrap:'wrap',
        elevation: 99,
    },
    searchContainer: {
        position: 'absolute', 
        borderColor:'green',
        borderWidth: 1,
        borderRadius: 50,
        flex: 1, 
        flexDirection:'row',
        flexWrap:'wrap',
        alignSelf: 'stretch', 
        right: '15%', 
        left: '15%',
    },
    searchBox: {
        top: '10%',
        padding: 50,
    },
    searchRs: {
        padding: 60,
    },
    advanceContainer: {
        position: 'absolute',
        left: '-15%',
        padding: 25
    },
    userContainer: {
        position: 'absolute',
        right: '-15%',
        padding: 25
    }


})


const Home = ({ navigation }) => {
    const [defaultStyle, setDefaultStyle] = useState();
    const [searchRs, setSearchRs] = useState([]);
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={15} color="green" style={{padding: 20}}/>
                    <TextInput
                        placeholder={"Tìm kiếm"}
                        onChangeText={async (text) => {setSearchRs(await search(text));  setDefaultStyle({display: 'flex'})}}
                    />
                </View>
                <Icon name="list" size={15} color="green" style={styles.advanceContainer}/>
                <Icon name="user" size={15} color="green" style={styles.userContainer}/>
            </View>
            <ScrollView style={[{display:'none'}, defaultStyle, styles.searchBox]}>
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
        </View>
    )
}

export default Home;