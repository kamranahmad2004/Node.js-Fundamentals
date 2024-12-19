const posts = [
    { id: 1, title: 'Post One', body: 'This is post one' },
    { id: 2, title: 'Post Two', body: 'This is post two' },
]

const getPosts = () => posts
const findPost = (id) => posts.find(post => post.id === id);
const findLength = () => posts.length

// es modules approach
export default getPosts
export { findPost, findLength }