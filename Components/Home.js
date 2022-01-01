import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import search from '../apis/search'

const styles = StyleSheet.create({
    header: {
        position: 'absolute', 
        top: 0, 
        flex: 1, 
        alignSelf: 'stretch', 
        right: '15%', 
        left: '15%',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    bottom: {
        position: 'absolute', 
        top: 100, 
        flex: 1, 
        left: 0,
        right: 0,
        alignSelf: 'stretch', 
        flexDirection:'row',
        flexWrap:'wrap',
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
                <ScrollView style={[{display:'none'}, defaultStyle]}>
                    {searchRs.map}
                </ScrollView>
                <Icon name="list" size={15} color="green" style={styles.advanceContainer}/>
                <Icon name="user" size={15} color="green" style={styles.userContainer}/>
            </View>
        </View>
    )
}

export default Home;