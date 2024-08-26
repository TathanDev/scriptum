'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await  queryInterface.addColumn(
      'Users',
      'pfp_user',
        {
          type: Sequelize.DataTypes.STRING,
          defaultValue: "http://localhost:25568/elements/img/user-icon-dark.png"
        }
      )
     
    },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
