const Sequelize = require('sequelize');
const db = require('../database/db.js');

const Match = db.define('match',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    likerUserId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      name: 'likerUserId',
      field: 'liker_user_id',
    },
    likedUserId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      name: 'likedUserId',
      field: 'liked_user_id',
    },
    steps: {
      type: Sequelize.INTEGER,
      field: 'steps',
    },
  },
  {
    freezeTableName: true, // Model tableName will be the same as the model name
  }
);


module.exports = Match;
