/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          title: 'первая',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'вторая',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
