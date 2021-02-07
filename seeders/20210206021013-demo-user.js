'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Loginapis', [{
      username: 'admin',
      password: '$2b$10$.d5AhwwJ5tx3hRJkEKLSxuz2sdsYShJalWTfCYCeZ6yclBf71mezm',
      email: 'admin@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Loginapis', null, {});
  }
};
