const {createUser, deleteUser, getUserById, loginUser} = require('./user-queries/userQueries')
const {getPosts, createPost, getPostById, deletePost, getPostsByUserId, getPostsByCategoryId }  = require('./posts-queries/postsQueries');
const {getCategories}  = require('./category-queries/categoryQueries');

module.exports = {
    getPosts, getUserById, createUser, deleteUser, createPost, getPostById, deletePost, getCategories, loginUser, getPostsByUserId, getPostsByCategoryId
}