/**

pipe를 통해 파일 복사하기
파일을 읽고 그 스트림을 전달받아 createWriteStream으로 파일을 쓸 수도 있다.

다음은 미리 읽기 스트림과 쓰기 스트림을 만들어둔 후 두 개의 스트림 사이를 pipe 메소드로 연결해서 데이터가 넘어간다.
따로 'data' 이벤트에 이벤트 리스너를 연동하지 않아도 알아서 전달되므로 편리하다.

*/

const fs = require("fs");

const readStream = fs.createReadStream("./stream/readAndWrite/readme3.txt");
const writeStream = fs.createWriteStream("./stream/readAndWrite/writeme3.txt");

readStream.pipe(writeStream);
