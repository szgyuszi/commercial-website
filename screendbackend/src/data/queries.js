const {createUser, deleteUser, getUserById} = require('./user-queries/userQueries')
const {getPosts}  = require('./posts-queries/postsQueries');

module.exports = {
    getPosts, getUserById, createUser, deleteUser,
}