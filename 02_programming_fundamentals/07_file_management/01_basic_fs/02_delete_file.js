
// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.

const fs = require("fs");

const pathFile = "/Users/Martin/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/tests/test_02.txt";

// function writeAndRead(path) {
//   fs.writeFile(path, JSON.stringify("Hey there!"), error => {
//     if (error) {
//       console.warn(error);
//       return;
//     }
//   });
//   fs.readFile(path, (error, data) => {
//     if (error) {
//       console.warn(error);
//     } else {
//       console.log(JSON.parse(data));
//     }
//     return;
//   });
// }
// writeAndRead(pathFile);

function deleteFile(path) {
  fs.stat(path, (error, stats) => {
    if (error) {
      console.warn(error);
    } else if (stats.isFile(path)) {
      fs.unlink(path, error => {
        if (error) {
          console.warn(error);
        } else {
          console.log("File deleted!");
        }
        return;
      });
    }
    return;
  });
}

deleteFile(pathFile);

module.exports = deleteFile;
