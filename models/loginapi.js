'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class Loginapi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Loginapi.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username wajib diisi'
        },
      },
    },
    password: DataTypes.TEXT,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
    }
  }, {
    sequelize,
    modelName: 'Loginapi',
  });
  Loginapi.beforeCreate(async (user, option) => {
    try {
      const hashed = await bcrypt.hash(user.password, 10)
      user.password = hashed
    } catch (error) {
      throw new Error()
    }
  })
  return Loginapi;
};