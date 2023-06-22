const boom = require('@hapi/boom');
const { models } = require('../../libs/sequelize');

class CustomerService {
  constructor() {}

  async create(data) {
    const newCustomer = await models.Customer.create(data);
    return newCustomer;
  }

  async find() {
    const response = await models.Customer.findAll();
    return response;
  }

  async findOne(id) {
    const user = await models.Customer.findByPk(id);
    if(!user){
      throw boom.notFound('user not found')
    }
    return user;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { id };
  }
}

module.exports = CustomerService;
