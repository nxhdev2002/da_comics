import axios from "axios";

const get_details = async (url) => {
    let c = 0, m, data={}, regex = /(?:col-xs-5 chapter">\n<a href="(.*?)".+Chapter (.*?)<\/a>|col-xs-[34].+small">(.*?)<\/div>)/gm, rs=[];
    const get_data = await axios.get(url)
    while ((m = regex.exec(get_data.data)) !== null) {
        c+=1
        switch (c) {
            case 1:
                data.url = m[1]
                data.chapter = m[2]
                break;
            case 2:
                data.date = m[3]
                break;
            case 3:
                data.view = m[3]
                rs.push(data)
                data = {}
                c = 0
                break;
        }
    }
    return rs
}
export default get_details;