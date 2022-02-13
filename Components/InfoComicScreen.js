import React, {useEffect, useState} from "react"
import {Text, View, TextInput, TouchableWithoutFeedback, Dimensions} from 'react-native'
import Image from 'react-native-scalable-image'
import { ScrollView } from "react-native-gesture-handler"
import getAdultComics from '../apis/get_comic'

const infoComicScreen = ({route, navigation}) => {
    const myloop = [];
    for (let i = 1; i <= route.params.newchapter; i++) {
        myloop.push(
            <TouchableWithoutFeedback key={i} onPress={() => navigation.navigate('reading_screen', {chapter: i, url: route.params.url})}>
                    <Text style={{padding: 15, borderBottomColor: 'red', borderBottomWidth: 0.5}}>Chapter {i}</Text>
            </TouchableWithoutFeedback>
        );
    }
    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Image
                    width={Dimensions.get('window').width}
                    height={150} // height will be calculated automatically
                    source={{uri: route.params.thumb}}
                />
            </View>
            <Text style={{alignSelf: 'center', marginTop: '3%'}}>{route.params.desc}</Text>
            <View style={{height: '76%'}}>
                <Text>Chapter List</Text>
                <ScrollView>
                    {myloop}
                </ScrollView>
                <TextInput
                />
            </View>
        </View>
    )
}

const infoAdultScreen = ({route, navigation}) => {
    const [data, setData] = useState()
    useEffect(() => {
        
    }, [])
    console.log(route.params.url)
    return (
        <Text>Ho</Text>
    )
}

export {
    infoAdultScreen,
    infoComicScreen
}