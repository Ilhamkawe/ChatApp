'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('users', {
      id : {
        type : Sequelize.INTEGER, 
        allowNull : false, 
        primaryKey : true, 
        autoIncrement : true,
      }, 
      uid : {
        type : Sequelize.STRING, 
        allowNull : false
      },
      name : {
        type : Sequelize.STRING, 
        allowNull : false, 
      }, 
      avatar : {
        type : Sequelize.STRING, 
        allowNull : true,
      }, 
      email : {
        type : Sequelize.STRING, 
        allowNull : false,
      }, 
      password  : {
        type : Sequelize.STRING, 
        allowNull : false,
      },
      isVerified : {
        type : Sequelize.BOOLEAN
      },
      created_at :{
        type : Sequelize.DATE, 
        allowNull : false,
      }, 
      updated_at :{
        type : Sequelize.DATE, 
        allowNull : false,
      }
    })

    await queryInterface.addConstraint('users', {
      type : "unique",
      name : "UNIQUE_USER_EMAIL",
      fields : ["email"] 
    })

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};
