const {pool} = require('../../config/databaseConfig')

const getPosts = (request, response) => {
    pool.query('Select p.id as "postId", p.title as "postTitle", p.img as "postImg", p.date as "postDate", p.likes as "postLikes", u.id as "userId", u.name as "userName", u.img as "userImg" from posts p JOIN users u on u.id = p.userid', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getPosts,
}

