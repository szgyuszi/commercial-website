const {pool} = require('../../config/databaseConfig')

const getPosts = (request, response) => {
    pool.query('Select p.id as "postId", p.title as "postTitle", p.img as "postImg", p.date as "postDate", p.likes as "postLikes", u.id as "userId", u.name as "userName", u.img as "userImg" from posts p JOIN users u on u.id = p.userid', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getPostById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('Select p.id as "postId", p.title as "postTitle", p.img as "postImg", p.date as "postDate", p.likes as "postLikes", p.categoryid as "categoryId", u.id as "userId", u.name as "userName", u.img as "userImg" from posts p JOIN users u on u.id = p.userid WHERE p.id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).json(result.rows[0])
    })
}

const  createPost = (request, response) => {
    const {title, img, userId, categoryId} = request.body
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const likes = 0;

    pool.query('INSERT INTO posts (title, img, date, likes, userId, categoryId) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [title, img, date, likes, userId, categoryId], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).json({id : results.rows[0].id})
    })
}

const deletePost = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM posts WHERE id = $1', [id], (error) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Post deleted with ID: ${id}`)
    })
}

const getPostsByUserId = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('Select id as "postId", title as "postTitle", img as "postImg", date as "postDate", likes as "postLikes", userid as "userId", categoryid as "categoryId" from posts WHERE userid = $1', [id], (error, result) => {
        if (result.length === 0) {
            response.status(404).send("User id posts not found")
        } else {
            response.status(200).json(result.rows)
        }
    })
}

const getPostsByCategoryId = (request, response) => {
    const id = parseInt(request.params.id);


    pool.query('Select id as "postId", title as "postTitle", img as "postImg", date as "postDate", likes as "postLikes", userid as "userId", categoryid as "categoryId" from posts WHERE categoryid = $1', [id], (error, result) => {
            if (error) {
                response.status(404);
            } else {

                response.status(200).json(result.rows)
            }



    })
}

module.exports = {
    getPosts, getPostById, createPost, deletePost, getPostsByUserId, getPostsByCategoryId
}

