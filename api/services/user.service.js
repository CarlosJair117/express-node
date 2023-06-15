const boom = require('@hapi/boom');
const pool = require('../../libs/postgres.pool')


const getConnection = require('../../libs/postgres')

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (error) => console.log(error))
  }

  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const rta = await this.pool(query);
    return rta.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
