/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          themeId: 1,
          content: 'Почему акулы не едят юристов?',
          price: 100,
          answer: 'Потому что они слишком "скользкие" и могут вызвать пищевое отравление.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          themeId: 1,
          content: 'Как называется дерево, которое всегда готово к сдаче экзамена?',
          price: 100,
          answer: 'Дерево, которое всегда готово к сдаче экзамена, называется "ответственность".',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeId: 1,
          content: 'Почему грибы находятся на вечеринке, но не танцуют?',
          price: 100,
          answer: 'Грибы находятся на вечеринке, но не танцуют, потому что им некуда ставить ноги.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeId: 1,
          content: 'Какой инструмент чаще всего забывают в оркестре?',
          price: 100,
          answer: 'Инструмент, который часто забывают в оркестре, - это дирижёр.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeId: 1,
          content: 'Как называется беспилотный автомобиль, который любит петь?',
          price: 100,
          answer: '"караоке-кар"',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeId: 2,
          content: 'Что за животное является домашним животным Хагрида? ',
          price: 100,
          answer: 'Гиппогриф',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeId: 2,
          content: 'Как зовут трехглавую собаку Хагрида, охраняющую Философский камень?',
          price: 100,
          answer: 'Пушистый',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeId: 2,
          content: 'Что такое фестрал?',
          price: 100,
          answer: 'Невидимый крылатый конь',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeId: 2,
          content: 'Слезы какого животного являются единственным известным противоядием от яда василиска?',
          price: 100,
          answer: 'Феникс',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeId: 2,
          content: 'Что будет делать мандрагора, если вытащить ее из земли?',
          price: 100,
          answer: 'Орать',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeId: 3,
          content: 'Сколько раз в песне "Фаина", группы "На-На, звучит слово "Фаина"? "',
          price: 100,
          answer: '80',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeId: 3,
          content: 'Среднее арифметическое между велосипедом и мотоциклом?',
          price: 100,
          answer: 'Мопед',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeId: 3,
          content: 'Когда козе исполнится семь лет, что будет дальше?',
          price: 100,
          answer: 'Пойдет восьмой',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeId: 3,
          content: 'Сколько раз отжимается Чак Норрис?',
          price: 100,
          answer: 'Все',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          themeId: 3,
          content: 'Сколько было веселых гусей?',
          price: 100,
          answer: 'Два',
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
