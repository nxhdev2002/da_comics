import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'
import RNRestart from 'react-native-restart';

const parse_require_data = (source) => {
    const regex = /input type="hidden" name="(.*)" .+ value="(.*)"/gm;
    let m;
    let arr = []
    while ((m = regex.exec(source)) !== null) {
        let temp = []
        temp.push(m[1])
        temp.push(m[2])
        arr.push(temp)
    }
    const entries = new Map(arr);
    const obj = Object.fromEntries(entries);
    return (obj);
}

const set_user_info = async (source) => {
    const regex = /uid='(.*)';.+Key='(.*)'.+token='(.*)'.+Name='(.*)';.+email='(.*)'/gm;
    let m;
    while ((m = regex.exec(source)) !== null) {
        await AsyncStorage.setItem("userGuid", m[1])
        await AsyncStorage.setItem("userKey", m[2])
        await AsyncStorage.setItem("token", m[3])
        await AsyncStorage.setItem("fullName", m[4])
        await AsyncStorage.setItem("email", m[5])
    }
}
const default_login = async (user, pass) => {
    const url = "https://www.nettruyenpro.com/Secure/Login.aspx?returnurl=%2f"
    const source = await axios.get(url)
    const token = parse_require_data(source.data)
    const require_data = {
        ctl00$mainContent$login1$LoginCtrl$UserName: user,
        ctl00$mainContent$login1$LoginCtrl$Password: pass,
        ctl00$mainContent$login1$LoginCtrl$RememberMe: 'on',
        ctl00$mainContent$login1$LoginCtrl$Login: 'Đăng nhập'
    }   
    const post_data = new URLSearchParams(Object.assign(token,require_data));
    const rs = await axios.post(url, post_data)
    const get_auth = await axios.get("http://www.nettruyenpro.com/Comic/Services/ComicService.asmx/GetAuth")
    await set_user_info(get_auth.data.data)
    await AsyncStorage.setItem("is_login", '1')
    RNRestart.Restart()
}

const login = (user, password, method="default") => {
    switch(method) {
        case "google":
            break
        case "facebook":
            break
        default:
            default_login(user, password)
    }
}

export default login;