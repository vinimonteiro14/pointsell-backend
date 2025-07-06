'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('pedidos',
    [
      {
        valor_total: 100,
        status: 'pendente',
        data_criacao: '2025-07-03',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        valor_total: 75,
        status: 'entregue',
        data_criacao: '2025-07-02',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
 await queryInterface.bulkDelete('pedidos', null, {});
  }
};
