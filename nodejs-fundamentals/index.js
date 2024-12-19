// console.log(window);    window is not defined in node.js
// console.log(global);     use global instead of window (parts of web browser's API)

// console.log(document)    document is not defined in node.js
// console.log(process)     Use process in Node.js for process-related information.

//                  ------   common js approach   ----
const {getRandomNumber, celciusToFahrenheit} = require('./utils')
console.log(getRandomNumber(1, 100));
console.log(celciusToFahrenheit(100));

// import getPosts, {findLength, findPost} from "./blogPosts.js";
// console.log(getPosts());
// console.log(`Length: ${findLength()}`);
// console.log(`Post: ${findPost(1)}`);
