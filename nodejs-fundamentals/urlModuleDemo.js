import url from 'url';

const myUrl = 'https://www.google.com/search?q=hello+world';
// console.log(url.parse(myUrl, true));     convert to object

const urlObj = new URL(myUrl);  // convert to object
console.log(urlObj);

console.log(url.format(urlObj));    // convert back to string  

console.log(import.meta.url);   // file url with file protocal
console.log(url.fileURLToPath(import.meta.url));    // absolute path -> convert file url to regular path

console.log(urlObj.search)
console.log(urlObj.searchParams)

const params = new URLSearchParams(urlObj.search)
console.log(params.get('q'));
console.log(params.append('limit', '5'))
console.log(params)

params.delete('limit')
console.log(params)
