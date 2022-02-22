import React, {useEffect, useState} from "react"
import {Text, View, TextInput, Button, Alert, TouchableWithoutFeedback, Dimensions} from 'react-native'
import Image from 'react-native-scalable-image'
import { ScrollView } from "react-native-gesture-handler"
import getAdultComics from '../apis/get_comic'

const infoComicScreen = ({route, navigation}) => {
    const [chapter, setChapter] = useState('')
    const myloop = [];
    for (let i = route.params.newchapter; i > 0; i--) {
        myloop.push(
            <TouchableWithoutFeedback key={i} onPress={() => navigation.navigate('reading_screen', {chapter: i, url: route.params.url})}>
                    <Text style={{padding: 15, borderBottomColor: 'red', borderBottomWidth: 0.5}}>Chapter {i}</Text>
            </TouchableWithoutFeedback>
        );
    }
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 3, flexDirection: 'row', justifyContent: 'center'}}>
                <Image
                    width={Dimensions.get('window').width}
                    height={151} // height will be calculated automatically
                    source={{uri: route.params.thumb}}
                />
            </View>
            <Text style={{alignSelf: 'center', marginTop: '3%'}}>{route.params.desc}</Text>
            <View style={{flex: 8}}>
                <Text>Chapter List</Text>
                <ScrollView>
                    {myloop}
                </ScrollView>
            </View>
            <View style={{flex: 1,flexDirection:'row', flexWrap:'wrap', justifyContent: 'space-around', alignItems:'center', height: '10%'}}>
                <TextInput
                    placeholder="Nhập chapter cần đọc"
                    keyboardType="numeric"
                    contextMenuHidden={true}
                    onChangeText={(text) => {setChapter(text)}}
                /><Button
                title="Đọc truyện"
                onPress={() => {
                    if (Number(chapter) <= 0 || Number(chapter) > route.params.newchapter) {
                        Alert.alert(
                            "Lỗi",
                            "Có vẻ như bạn nhập chapter có vấn đề. Bạn có muốn đọc từ chap 1 không?",
                            [
                              {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                              },
                              { 
                                text: "OK", onPress: () => navigation.navigate('reading_screen', {chapter: '1', url: route.params.url}) 
                              }
                            ]
                        );
                    } else {
                        navigation.navigate('reading_screen', {chapter: chapter, url: route.params.url})
                    }
                }}
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