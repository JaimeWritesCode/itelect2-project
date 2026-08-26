'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('Users', [
      { name: 'Ukinami Yuzuha', email: 'yuzuha@example.com', createdAt: now, updatedAt: now },
      { name: 'Billy Kid', email: 'billy@example.com', createdAt: now, updatedAt: now },
      { name: 'Promeia', email: 'promeia@example.com', createdAt: now, updatedAt: now }
    ]);

    const users = await queryInterface.sequelize.query(
      'SELECT id, name FROM "Users";',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const getIdOf = (name) => users.find((u) => u.name === name).id;

    await queryInterface.bulkInsert('Tasks', [
      { title: 'Setup Development Environment', completed: true, userId: getIdOf('Ukinami Yuzuha'), createdAt: now, updatedAt: now },
      { title: 'Configure Sequelize ORM', completed: true, userId: getIdOf('Ukinami Yuzuha'), createdAt: now, updatedAt: now },
      { title: 'Build Database Seeders', completed: false, userId: getIdOf('Billy Kid'), createdAt: now, updatedAt: now },
      { title: 'Implement Express API Routes', completed: false, userId: getIdOf('Billy Kid'), createdAt: now, updatedAt: now },
      { title: 'Run Postman Collection Tests', completed: false, userId: getIdOf('Promeia'), createdAt: now, updatedAt: now }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};