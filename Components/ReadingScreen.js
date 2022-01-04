import React, {useEffect, useState} from "react"
import {View, FlatList} from 'react-native'
import Image from 'react-native-scalable-image'
import { SafeAreaView } from "react-native-safe-area-context"
import { Dimensions } from 'react-native';


import get_pictures from '../apis/get_comic'

const get_data = async (url, setData) => {
    setData(await get_pictures(url.replace("http", "https")))
}

const render_image = ({item}) => (
    <Image
        width={Dimensions.get('window').width} // height will be calculated automatically
        source={{uri: 'https://nxhdev.pro/api/da_comics/index.php?url=' + encodeURIComponent(item)}}
    />
)
const reading_screen = ({route, navigation}) => {
    const [data, setData] = useState([]) 
    useEffect(() => {
        get_data(route.params.url, setData)
    },[])
    console.log(route.params.url)
    return (
        <SafeAreaView>
            <FlatList
                style={{padding: 10}}
                data={data}
                renderItem={render_image}
                keyExtractor={(item) => item}
                removeClippedSubviews={true}
            />
        </SafeAreaView>
        
        // <ScrollView style={{padding: 10}}>
        //     {data.map((i) => (
        //         console.log(i),
        //             <Image
        //                 style={{flex: 1, aspectRatio: 0.7, }}
        //                 source={{
        //                 uri: 'https://nxhdev.pro/api/da_comics/index.php?url=' + encodeURIComponent(i),
        //                 resizeMode: 'contain'
        //                 }}
        //             />
        //     ))}
        // </ScrollView>
    )
}

export default reading_screen