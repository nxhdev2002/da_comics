import axios from 'axios'

const search = async (keyword) => {
    let arrRs = []
    let rs = await axios.get("https://www.nettruyengo.com/Comic/Services/SuggestSearch.ashx?q=" + keyword)
    let regex = /^.+(?:(?:href|src)="(.*?)"|i>Chapter (.*)<|h3>(.*)<|i>(.*?)<\/i>\n<)/gm
    let m, c = 0, data={};
    while ((m = regex.exec(rs.data)) !== null) {
        c+=1
        switch (c) {
            case 1:
                data.url = m[1]
                break
            case 2:
                try {
                    data.thumb = m[1].replace("//", "https://")
                } catch (e) {
                    data.thumb = m[1]
                }
                break
            case 3:
                try {
                    data.name = m[3].replace(/(.{40})..+/, "$1...")
                } catch (e) {
                    data.name = m[3]
                }
            case 4:
                data.newchapter = m[2]
                break
            case 5:
                try {
                    data.desc = m[4].replace(/(.{40})..+/, "$1...")
                } catch (e) {
                    data.desc = m[4]
                }
                c = 0
                arrRs.push(data)
                data = {}
                break
        }
    }
    return arrRs;
}

const adult_search = async (keyword) => {
    let m, c = 0, data = {}, arrRs = []
    let rs = await axios.get("https://hentaivn.moe/tim-kiem-truyen.html?key=" + keyword)
    let regex = /(?:<p style="font-size: 18px; line-height: 22px;">\n<a href="(.*?)">(.*?)<\/a>|data-srcset="(.*?)")/gm
    while ((m = regex.exec(rs.data)) !== null) {
        console.log(m)
        c+=1
        switch(c) {
            case 1:
                data.thumb = m[3]
                break
            case 2:
                data.url = m[1]
                data.name = m[2]
                c = 0
                arrRs.push(data)
                data = {}
                break
        }
        
    }
    console.log(arrRs)
    return arrRs;
}
export {
    search,
    adult_search
}