/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          themeId: 1,
          content: 'вопрос1',
          price: 100,
          answer: 'вопрос1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          themeId: 2,
          content: 'вопрос2',
          price: 100,
          answer: 'вопрос2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
