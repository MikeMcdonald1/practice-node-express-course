const fs = require("fs");

const stream = fs.createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 200,
});

let chunkCount = 0;

stream.on("data", (chunk) => {
  chunkCount++;
  console.log(chunk);
});

stream.on("end", () => {
  console.log(`Total chunks received: ${chunkCount}`);
});

stream.on("error", (err) => {
  console.log("Stream error:", err);
});
