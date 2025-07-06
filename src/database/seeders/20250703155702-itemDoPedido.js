'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('itemdopedidos', [
      {
        pedido_id: 1,
        produto_id: 1,
        quantidade: 2,
        preco_unitario: 45, // 2 x 45 = 90
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pedido_id: 1,
        produto_id: 2,
        quantidade: 1,
        preco_unitario: 10, // 90 + 10 = 100
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pedido_id: 2,
        produto_id: 2,
        quantidade: 3,
        preco_unitario: 25, // 3 x 25 = 75
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
 await queryInterface.bulkDelete('itemdopedidos', null, {});
  }
};
