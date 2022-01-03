import React, {useEffect, useState} from "react"
import {Image, View} from 'react-native'
import {ScrollView } from "react-native-gesture-handler"

import get_pictures from '../apis/get_comic'

const get_data = async (url, setData) => {
    setData(await get_pictures(url))
}
const reading_screen = ({route, navigation}) => {
    const [data, setData] = useState([]) 
    useEffect(() => {
        get_data(route.params.url, setData)
    },[])
    console.log(data)
    return (
        <ScrollView style={{padding: 10}}>
            {data.map((i) => (
                console.log(i),
                    <Image
                        style={{flex: 1, aspectRatio: 0.7, }}
                        source={{
                        uri: 'https://nxhdev.pro/api/da_comics/index.php?url=' + encodeURIComponent(i),
                        resizeMode: 'contain'
                        }}
                    />
            ))}
        </ScrollView>
    )
}

export default reading_screen