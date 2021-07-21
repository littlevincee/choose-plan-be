'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Plans', [
      { code: 'STANDARD', description: 'Standard Plan', price: 0, period: 'month', createdAt: new Date(), updatedAt: new Date() },
      { code: 'PREMIUM', description: 'Premium Plan', price: 388, period: 'month', createdAt: new Date(), updatedAt: new Date() },
      { code: 'PLATINUM', description: 'Platinum Plan', price: 688, period: 'month', createdAt: new Date(), updatedAt: new Date() },
      { code: 'VIP', description: 'VIP Plan', price: 1888, period: 'month', createdAt: new Date(), updatedAt: new Date() },
    ], {});

     await queryInterface.bulkInsert('Features', [
      { code: 'GENE', description: 'General', createdAt: new Date(), updatedAt: new Date() },
      { code: 'SPEC', description: 'Specialist', createdAt: new Date(), updatedAt: new Date() },
      { code: 'PHYS', description: 'Physiotherapy', createdAt: new Date(), updatedAt: new Date() },
      { code: 'NEUR', description: 'Neurologist', createdAt: new Date(), updatedAt: new Date() },
      { code: 'PSYC', description: 'Psychiatrist', createdAt: new Date(), updatedAt: new Date() },
      { code: 'ONCO', description: 'Oncologist', createdAt: new Date(), updatedAt: new Date() },
      { code: 'GAST', description: 'Gastroenterologist', createdAt: new Date(), updatedAt: new Date() },
      { code: 'ORTH', description: 'Orthopedist', createdAt: new Date(), updatedAt: new Date() },
    ], {});

     await queryInterface.bulkInsert('PlanFeatures', [
      { planId: 1, featureId: 1, IsActive: true, createdAt: new Date(), updatedAt: new Date() },

      { planId: 2, featureId: 1, IsActive: true, createdAt: new Date(), updatedAt: new Date() },
      { planId: 2, featureId: 2, IsActive: true, createdAt: new Date(), updatedAt: new Date() },
      { planId: 2, featureId: 3, IsActive: true, createdAt: new Date(), updatedAt: new Date() },
      { planId: 2, featureId: 4, IsActive: true, createdAt: new Date(), updatedAt: new Date() },

      { planId: 3, featureId: 1, IsActive: true , createdAt: new Date(), updatedAt: new Date() },
      { planId: 3, featureId: 2, IsActive: true , createdAt: new Date(), updatedAt: new Date() },
      { planId: 3, featureId: 3, IsActive: true , createdAt: new Date(), updatedAt: new Date() },
      { planId: 3, featureId: 4, IsActive: true , createdAt: new Date(), updatedAt: new Date() },
      { planId: 3, featureId: 5, IsActive: true, createdAt: new Date(), updatedAt: new Date() },
      { planId: 3, featureId: 6, IsActive: true, createdAt: new Date(), updatedAt: new Date() },

      { planId: 4, featureId: 1, IsActive: true , createdAt: new Date(), updatedAt: new Date() },
      { planId: 4, featureId: 2, IsActive: true , createdAt: new Date(), updatedAt: new Date() },
      { planId: 4, featureId: 3, IsActive: true , createdAt: new Date(), updatedAt: new Date() },
      { planId: 4, featureId: 4, IsActive: true , createdAt: new Date(), updatedAt: new Date() },
      { planId: 4, featureId: 5, IsActive: true , createdAt: new Date(), updatedAt: new Date() },
      { planId: 4, featureId: 6, IsActive: true , createdAt: new Date(), updatedAt: new Date() },
      { planId: 4, featureId: 7, IsActive: true, createdAt: new Date(), updatedAt: new Date() },
      { planId: 4, featureId: 8, IsActive: true, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('PlanFeatures', null, {});
     await queryInterface.bulkDelete('Features', null, {});
     await queryInterface.bulkDelete('Plans', null, {});
  }
};
