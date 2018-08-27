
const fs = require('fs');

module.exports = {
    fileRead : function(input, ouput){
        const readableStream = fs.createReadStream(input);
        readableStream.setEncoding('UTF8');
        const writeableStream = fs.createWriteStream(ouput, 'UTF8');
        readableStream.on('open', () => {
            console.log('original file opened');
        }).on('end', () => {
            console.log('original file read');
        });
        writeableStream.on('open', () => {
            console.log('copy file opened');
        }).on('finish', () => {
            console.log('copy file written');
        });
        readableStream.pipe(writeableStream);
    }
}