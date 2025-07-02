var fs = require('fs');

const platformType = ['BROWSER', 'ANDROID', 'IOS', 'WECHAT_GAME'];

//本地文件目录
const folderPath = `${__dirname}`;
const jsonFilePath = folderPath + '/assets/resources/AppConfig.json'

function startGenerator() {
    parames = process.argv.splice(2).toString().split(',');
    platformStr = parames[0];
    newVersionStr = parames[1];
    console.log('所传递的参数1是：', platformStr);
    console.log('所传递的参数2是：', newVersionStr);
    if (!platformType.includes(platformStr)) {
        console.log(`参数1错误，平台类型:'BROWSER', 'ANDROID', 'IOS', 'WECHAT_GAME'`);
        return;
    }
    if (newVersionStr == '' || newVersionStr.split('.').length != 3) {
        console.log(`参数2错误，请输入正确的版本号。eg 2.0.0`);
        return;
    }
    let versionInfo = JSON.parse(fs.readFileSync(jsonFilePath, { encoding: "utf-8" }));
    versionInfo[platformStr].version = newVersionStr;
    fs.writeFileSync(jsonFilePath, JSON.stringify(versionInfo, null, "\t"));
}

startGenerator();

