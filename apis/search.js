import axios from 'axios'

const search = async (keyword) => {
    let arrRs = []
    let rs = await axios.get("http://www.nettruyengo.com/Comic/Services/SuggestSearch.ashx?q=" + keyword)
    let regex = /^.+(?:(?:href|src)="(.*?)"|i>Chapter (.*)<)/gm;
    let m, c = 0, data={};
    while ((m = regex.exec(rs.data)) !== null) {
        c+=1
        console.log(m)
        if (c == 1) data.url = m[1]
        if (c == 2) data.thumb = m[1]
        if (c == 3) {
            data.newchapter = m[2]
            c = 0
            arrRs.push(data)
        }
    }
    return arrRs;
}

export default search;