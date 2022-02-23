import axios from "axios";

const get_comic = () => {
    
}

const get_pictures = async (url) => {
    let m, regex = /data-index='[0-9]+' src='(.*?)'/gm, rs=[];
    url = url.replace('http', 'https')
    const get_data = await axios.get(url)
    console.log(url)
    while ((m = regex.exec(get_data.data)) !== null) {
        rs.push(m[1])
    }
    return rs
}
export default get_pictures;