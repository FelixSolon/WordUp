'use strict'

module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define('word', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    word: {
      type: DataTypes.STRING,
      required: true
    },
	definition: {
      type: DataTypes.STRING,
      required: true
    },
	partOfSpeech: {
      type: DataTypes.STRING,
      required: true
    },
    created_at: {
      type: DataTypes.DATE,
	  defaultValue: sequelize.fn('now'),
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    underscored: true
  });
  return Word;
};