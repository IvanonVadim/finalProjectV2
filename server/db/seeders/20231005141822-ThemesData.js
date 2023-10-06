/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          title: 'Юмор ИИ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Гарри Поттер',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Разное',
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
