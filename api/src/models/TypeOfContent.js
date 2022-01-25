const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "typeOfContent",
    {
      image: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      creationDate: {
        type: DataTypes.DATE,
      },
      qualification: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
};
