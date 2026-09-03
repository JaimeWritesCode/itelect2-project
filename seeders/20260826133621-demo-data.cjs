'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const defaultPassword = await bcrypt.hash('Password123!', 10);

    await queryInterface.bulkInsert('Users', [
      { email: 'yuzuha@example.com', password: defaultPassword, role: 'member', createdAt: now, updatedAt: now },
      { email: 'billy@example.com', password: defaultPassword, role: 'member', createdAt: now, updatedAt: now },
      { email: 'promeia@example.com', password: defaultPassword, role: 'member', createdAt: now, updatedAt: now }
    ]);

    const users = await queryInterface.sequelize.query(
      'SELECT id, email FROM "Users";',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const getIdOf = (email) => users.find((u) => u.email === email).id;

    await queryInterface.bulkInsert('Tasks', [
      { title: 'Setup Development Environment', completed: true, userId: getIdOf('yuzuha@example.com'), createdAt: now, updatedAt: now },
      { title: 'Configure Sequelize ORM', completed: true, userId: getIdOf('yuzuha@example.com'), createdAt: now, updatedAt: now },
      { title: 'Build Database Seeders', completed: false, userId: getIdOf('billy@example.com'), createdAt: now, updatedAt: now },
      { title: 'Implement Express API Routes', completed: false, userId: getIdOf('billy@example.com'), createdAt: now, updatedAt: now },
      { title: 'Run Postman Collection Tests', completed: false, userId: getIdOf('promeia@example.com'), createdAt: now, updatedAt: now }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};