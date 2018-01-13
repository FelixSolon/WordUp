'use strict'

module.exports = (sequelize, DataTypes) => {
  const UserScores = sequelize.define('userScores', {
    id: {
      type: DataTypes.INTEGER,
	  autoIncrement: true,
	  primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
	word_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
      required: true
    },
    created_at: {
      type: DataTypes.DATE,
	  defaultValue: sequelize.fn('now'),
      allowNull: false
    },
    updated_at:  {
		type: DataTypes.DATE,
		defaultValue: sequelize.fn('now')
	},
    deleted_at: DataTypes.DATE
  }, {
    underscored: true
  });
  return UserScores;
};
