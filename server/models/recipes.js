'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipes = sequelize.define('recipes', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    recipeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.BLOB,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    meatType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dishType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    preparation: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  recipes.associate = (models) => {
    recipes.hasMany(models.reviews, {
      foreignKey: 'recipeId'
    })
  }
  recipes.associate = (models) => {
    recipes.hasMany(models.favourites, {
      foreignKey: 'recipeId'
    })
  }

  recipes.associate = (models) => {
    recipes.hasMany(models.views, {
      foreignKey: 'recipeId'
    })
  }

  recipes.associate = (models) => {
    recipes.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    })
  }
  return recipes;
};