const {pool} = require('../../config/databaseConfig')

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const {name, email, password, img} = request.body

    pool.query('INSERT INTO users (name, email, password, img) VALUES ($1, $2, $3, $4) RETURNING *', [name, email, password, img], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

const loginUser = (request, response) => {
   const {email, password} = request.body;

    pool.query('SELECT id, name, img as "userImg" FROM users WHERE email=$1 and password=$2', [email, password], (error, results) => {
        if (error) {
            response.status(501).send('Database Error')
        } else {
            if (results.rows.length > 0) {
                response.status(200).json(results.rows)
            } else {
                response.status(404).send('Email or password incorrect')
            }
        }
    })
}

module.exports = {
    getUserById,
    createUser,
    deleteUser,
    loginUser,
}
