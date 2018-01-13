'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      required: true
    },
    profile: {
      type: DataTypes.STRING
    },
	level: {
      type: DataTypes.INTEGER
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
  return User;
};