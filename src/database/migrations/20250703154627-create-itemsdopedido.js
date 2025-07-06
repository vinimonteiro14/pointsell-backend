'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('itemdopedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pedido_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'pedidos', key: 'id' }
      },
      produto_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'produtos', keys: 'id' }
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      preco_unitario: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('itemdopedidos');
  }
};