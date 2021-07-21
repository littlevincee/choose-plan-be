'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PlanFeatures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PlanId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Plans',
          key: 'id',
          as: 'PlanId'
        }
      },
      FeatureId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Features',
          key: 'id',
          as: 'FeatureId'
        }
      },
      IsActive: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PlanFeatures');
  }
};