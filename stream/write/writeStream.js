fs = require("fs");

const writeStream = fs.createWriteStream("./stream/write/writeme2.txt");
writeStream.on("finish", () => console.log("파일 쓰기 완료"));

writeStream.write("글쓰기 \n");
writeStream.write("완료");
writeStream.end();
