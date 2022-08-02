//type:类型，h：16字节标识【根据需要，自行添加】
const mime = [
    { type: 'image/png', h: '89504e47' },
    { type: 'image/gif', h: '47494638' },
    { type: 'image/jpeg', h: 'ffd8ffe0,ffd8ffe1,ffd8ffe2,ffd8ffe3,ffd8ffe8' },
    { type: 'image/webp', h: '524946461c' },
    { type: 'Windows Bitmap/bmp', h: '424D' },
    { type: 'TIFF/tif', h: '49492A00' },
    { type: 'CAD/dwg', h: '41433130' },
    { type: 'Adobe Photoshop/psd', h: '384250' },
]

export default mime;