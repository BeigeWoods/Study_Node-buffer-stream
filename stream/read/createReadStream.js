const fs = require("fs");

/**
readStream은 이벤트 리스너에 이벤트를 연동해서 사용한다.
보통 data, end, error 이벤트를 사용한다.

다음 예제는 미리 data 배열을 만들어놓고 들어오는 chunk들을 하나씩 push한 뒤,
마지막에 Buffer.concat()으로 합쳐서 다시 문자열을 만든다.

createReadStream : 읽기 스트림을 만들기
highWaterMark : 버퍼의 크기(바이트 단위)를 정할 수 있는 옵션, 다음은 16B
*/

const readStream = fs.createReadStream("./stream/read/readme1.txt", {
  highWaterMark: 16,
});
const data = [];

readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log("data : ", chunk, chunk.length);
});

readStream.on("end", () =>
  console.log("end : ", Buffer.concat(data).toString())
);

readStream.on("error", (err) => console.log("error : ", err));
