const request = require('request');
const fs= require('fs');
/* Create an empty file where we can save data */
/* Using Promises so that we can use the ASYNC AWAIT syntax */        

const downloadJS = async (filename,link) => {
    let file = fs.createWriteStream(filename);
    await new Promise((resolve, reject) => {
        let stream = request({
            /* Here you should specify the exact link to the file you are trying to download */
            uri: link,
            headers: {
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3',
                'Cache-Control': 'max-age=0',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36'
            },
            /* GZIP true for most of the websites now, disable it if you don't need it */
            gzip: true
        })
        .pipe(file)
        .on('finish', () => {
            console.log(`The file is finished downloading.`);
            resolve();
        })
        .on('error', (error) => {
            reject(error);
        })
    })
    .catch(error => {
        console.log(`Something happened: ${error}`);
    });
};
downloadJS("save.js", "https://www.hacksparrow.com/wp-content/themes/hacksparrow/jquery-1.6.1.min.js");