const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: 'themeId' });
    }
  }
  Question.init(
    {
      themeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      answer: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
