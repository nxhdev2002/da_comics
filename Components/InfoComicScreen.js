import React, {useEffect, useState} from "react"
import {Text, View, TouchableWithoutFeedback} from 'react-native'
import { ScrollView } from "react-native-gesture-handler"

import get_details from '../apis/comic_info'

const getdata = async (url, setAllChapterData) => {
    setAllChapterData(await get_details(url))
}
export default infoComicScreen = ({route, navigation}) => {
    const [allChapterData, setAllChapterData] = useState([{url: 'loading', chapter: 'loading', date: 'loading', view: 'loading'}])
    useEffect(() => {
        getdata(route.params.url, setAllChapterData)
    }, [])
    return (
        <ScrollView style={{padding: 50}}>
            {allChapterData.map((i) => (
                <TouchableWithoutFeedback key={i.chapter} onPress={() => navigation.navigate('reading_screen', i)}>
                    <Text>{i.chapter}</Text>
                </TouchableWithoutFeedback>
            ))}
        </ScrollView>
    )
}