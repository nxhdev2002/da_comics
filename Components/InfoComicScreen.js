import React, {useEffect, useState} from "react"
import {Text, View, TouchableWithoutFeedback} from 'react-native'
import { ScrollView } from "react-native-gesture-handler"


export default infoComicScreen = ({route, navigation}) => {
    const myloop = [];
    for (let i = 1; i <= route.params.newchapter; i++) {
        myloop.push(
            <TouchableWithoutFeedback key={i} onPress={() => navigation.navigate('reading_screen', {chapter: i, url: route.params.url.replace(/-\d+$/i, '') + "/chap-" + i + "/1"})}>
                    <Text>Chapter {i}</Text>
            </TouchableWithoutFeedback>
        );
    }
    return (
        <ScrollView style={{padding: 0}}>
            {myloop}
        </ScrollView>
    )
}