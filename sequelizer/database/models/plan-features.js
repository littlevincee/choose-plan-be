'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PlanFeatures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Plans);
      this.belongsTo(models.Features);
    }
  };
  PlanFeatures.init({
    PlanId: DataTypes.INTEGER,
    FeatureId: DataTypes.INTEGER,
    IsActive: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'PlanFeatures',
  });
  return PlanFeatures;
};