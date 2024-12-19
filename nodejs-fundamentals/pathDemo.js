import path from 'path'
import url from 'url'

const filePath = '/dir1/dir2/dir3/test.txt'
console.log(path.basename(filePath))    // test.txt
console.log(path.dirname(filePath))    // /dir1/dir2/dir3
console.log(path.extname(filePath))    // .txt

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename) 
console.log(__dirname)

const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'dir3', 'test.txt')  // absolute path, set delimiter itself for different OS
console.log(filePath2)

const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'dir3', 'test.txt') 
console.log(filePath3)