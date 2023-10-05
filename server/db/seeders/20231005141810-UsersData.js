/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'vadim',
          password: '12345',
          score: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'rustam',
          password: '54321',
          score: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
