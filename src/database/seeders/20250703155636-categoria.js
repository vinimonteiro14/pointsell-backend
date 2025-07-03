'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('categorias', [
     {
        nome: 'Entradas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Pratos Principais',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Sobremesas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Bebidas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Saladas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('categorias', null, {});
  }
};
