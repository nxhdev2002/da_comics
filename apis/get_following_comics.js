import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'

const get_follow_comics = async (page) => {
    const url = 'http://f.nettruyenpro.com/Comic/Services/ComicService.asmx/GetFollowedPageComics'
    const user_guid = await AsyncStorage.getItem("userGuid")
    const token = await AsyncStorage.getItem("userKey")
    const data = await axios.get(url + "?page=" + page + "&userGuid=" + user_guid + "&loadType=2&token=" + token)
    const regex = /<a class="comic-name" href="(.*?)">(.*)<\/a>/gm;
    let m, res = [];
    while ((m = regex.exec(data.data.followedListHtml)) !== null) {
        for (var i = 1; i < m.length; i+=2) {
            let comics_info = {
                name: m[i],
                url: m[i+1]
            }
            res.push(comics_info)
        }
    }
    return res
}

export default get_follow_comics;