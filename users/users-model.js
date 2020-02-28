const db = require('../database/dbConfig');

module.exports = {
    add,
    get,
    getBy,
    getById
}

function get() {
    return db('users').select('id', 'username');
}

function getBy(filter) {
    return db('users').where(filter)
}

async function add(user) {
    const [id] = await db('users').insert(user)

    return getById(id);
}

function getById(id) {
    return db('users')
        .where({ id })
        .first()
}