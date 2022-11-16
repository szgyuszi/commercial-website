const {createUser, deleteUser, getUserById} = require('./user-queries/userQueries')
const {getPosts, createPost, getPostById, deletePost}  = require('./posts-queries/postsQueries');

module.exports = {
    getPosts, getUserById, createUser, deleteUser, createPost, getPostById, deletePost
}