import axios from "axios"

const parse_require_data = (source) => {
    const regex = /input type="hidden" name="(.*)" .+ value="(.*)"/gm;
    let m;
    let arr = []
    while ((m = regex.exec(source)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        let temp = []
        temp.push(m[1])
        temp.push(m[2])
        arr.push(temp)
    }
    const entries = new Map(arr);
    const obj = Object.fromEntries(entries);
    return (obj);
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