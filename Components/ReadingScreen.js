import React, {useEffect, useState} from "react"
import {FlatList} from 'react-native'
import Image from 'react-native-scalable-image'
import { SafeAreaView } from "react-native-safe-area-context"
import { Dimensions } from 'react-native';


import get_pictures from '../apis/get_comic'

const get_data = async (url, chapter, setData) => {
    setData(await get_pictures(url.replace(/-\d+$/i, '') + "/chap-" + chapter + "/1"))
}

const render_image = ({item}) => 
    (
        <Image
            width={Dimensions.get('window').width} // height will be calculated automatically
            source={{uri: 'https://nxhdev.pro/api/da_comics/get_picture.php?url=' + encodeURIComponent(item.replace(/https:\/\/|\/\/|http:\/\//gm, ''))}}
        />
    )
const reading_screen = ({route, navigation}) => {
    const [data, setData] = useState([]) 
    useEffect(() => {
        get_data(route.params.url, route.params.chapter, setData)
        console.log(route.params.url)
    },[])
    console.log(data)
    return (  
        <SafeAreaView>
            <FlatList
                style={{padding: 0, zIndex: 999}}
                data={data}
                renderItem={render_image}
                keyExtractor={(item) => item}
                removeClippedSubviews={true}
            />
        </SafeAreaView>
    )
}

export default reading_screen