'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.INTEGER
      },
      url_foto: {
        type: Sequelize.STRING
      },
      categoria_id: {
        type: Sequelize.INTEGER
      },
      promocao: {
        type: Sequelize.BOOLEAN
      },
      menu_do_dia: {
        type: Sequelize.BOOLEAN
      },
      mais_pedidos: {
        type: Sequelize.BOOLEAN
      },
      novidade: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};