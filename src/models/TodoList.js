const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('TodoList', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: true
    },
    expirationDate:{
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    stateTask:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    completed:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false

    }
  },{
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};
