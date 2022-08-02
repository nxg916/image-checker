function check(header) {
    for (let i in mime) {
        let arr = mime[i].h.split(',');
        let offset = (mime[i].offset || -1) + 1;//偏移量
        for (let j in arr) {
            let byte = arr[j].toLowerCase().replace(/\s+/g, "");
            if (header.indexOf(byte) == offset) {
                return mime[i].type;
            }
        }
    }
    return 'unknown';
}

function check(file, callback) {
    let blob = file.slice(0, 128); //仅获取前128字节。
    let reader = new FileReader();
    reader.onloadend = function (e) {
        let arr = (new Uint8Array(e.target.result)).subarray(0, 200);
        let header = "";
        for (let i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
        }
        let type = check(header);
        callback(type);
    }
    reader.readAsArrayBuffer(blob);
}

export default check;