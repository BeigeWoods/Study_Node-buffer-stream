/**

zlib : 파일을 압축하는 내장 모듈
zlib의 createGzip이라는 메소드가 스트림을 지원하므로 readStream과 writeStream 중간에서 파이핑을 할 수 있다.
버퍼 데이터가 전달되다가 gzip 압축을 거친 후 파일로 써진다.

 */

const zlib = require("zlib");
const fs = require("fs");

const readStream = fs.createReadStream("./stream/readAndZip/readme4.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./stream/readAndZip/readme4.txt.gz");

readStream.pipe(zlibStream).pipe(writeStream);
