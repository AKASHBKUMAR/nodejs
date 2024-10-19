const fileSystem = require("node:fs");

const existingFileData = fileSystem.readFileSync("./Files/input.txt", "utf-8");
// console.log(existingFileData);

fileSystem.writeFileSync(
  "./Files/write.txt",
  `I am Akash. This is written by the Node JS \nContents of Input File:${existingFileData} \nDate Created ${new Date()}`
);

const existingFileDataAsynchronouse = fileSystem.readFile(
  "./Files/write.txt",
  "utf-8",
  (error, data) => {
    console.log(data);
  }
);

const writeFileDataAsynchronously = fileSystem.writeFile(
  "./Files/AsynchronousWrite.txt",
  "Writing the File Contents Aysnchronously.",
  (error, data) => {
    console.log(error);
  }
);
