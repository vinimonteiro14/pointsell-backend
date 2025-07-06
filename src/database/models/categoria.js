'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      Categoria.hasMany(models.Produto, {
        foreignKey: 'categoria_id'
      });
    }
  }
  Categoria.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categorias'
  });
  return Categoria;
};