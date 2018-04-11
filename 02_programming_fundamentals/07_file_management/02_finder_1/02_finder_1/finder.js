/*
In many ways, Finder is a sadly unergonomic software.
I suggest you realize the feat of doing even worse by
implementing your own Finder.

Let's go for the worst user experience of history!
*/

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

{
  "key1": "value1",
  "key2": ["value2", "value3"],
  "key3": { "subkey1": "subvalue1" }
}

function finder() {
  fs.readdir()
}

module.exports = finder;
