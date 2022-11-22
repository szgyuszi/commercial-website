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
    const {name, email, password} = request.body
    const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGpDio_UDawRsrR-GzrvXvuf7FIEoZ4FtYQGUq6_2Zjb-UGKJhpNOrUJyvGeCImPmfJL4&usqp=CAU"
    pool.query('INSERT INTO users (name, email, password, img) VALUES ($1, $2, $3, $4) On CONFLICT(email) DO NOTHING returning id', [name, email, password, img], (error, results) => {
        if(results.rows.length === 0) {
            return response.status(401).json({error: "Email already used!"})
        } else {
            response.status(201).json(results.rows[0].id)
        }
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
