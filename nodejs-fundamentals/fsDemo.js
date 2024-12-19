// import fs from "fs";
import fs from "fs/promises";

// readFile - callback()
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// synchronous readFile - blocking until it finishes
// try {
//   const data = fs.readFileSync("./test.txt", "utf8");
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// readFile - promise
// fs.readFile("./test.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile - async await
// const readFile = async () => {
//   try {
//     const data = await fs.readFile("./test.txt", "utf8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// readFile();

// writeFile - callback
// fs.writeFile('./test.txt', 'Hello guys!', (err) => {
//     if (err) throw err;
// })

// writeFile - promise
// fs.writeFile('./test.txt', 'Salam to everyone guys!')
//     .then(() => console.log('written in file using promise'))
//     .catch((err) => console.log(err))

// writeFile - async await
const writingFile = async () => {
  try {
    await fs.writeFile(
      "./test.txt",
      "Salam to everyone guys! \nHope so you are well"
    );
    console.log("written in file using async await");
  } catch (error) {
    console.log(error);
  }
};

// writingFile();
// // appendFile - callback
// fs.appendFile('./test.txt', '\nSalam to everyone again buddies', (err) => {
//     if(err) throw err
//     console.log('written in file using appendFile - callback')
// })

// appendFile - async await
const appendingFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nWhat are you doing for tomorrow?");
    console.log("written in file using appendFile - async await");
  } catch (error) {
    console.log(error);
  }
};

appendingFile();
