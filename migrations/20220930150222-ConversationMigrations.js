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

    await queryInterface.createTable("conversations", {
      id : {
        type : Sequelize.INTEGER, 
        primaryKey : true, 
        allowNull : false, 
        autoIncrement : true
      }, 
      from_user : {
        type : Sequelize.INTEGER, 
        allowNull : false, 
      }, 
      to_user : {
        type : Sequelize.INTEGER, 
        allowNull : false,
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

    await queryInterface.addConstraint("conversations", {
      type : "foreign key", 
      name : "MESSAGE__FROM_USER", 
      fields : ["from_user"], 
      references : {
        table : "users", 
        field : "id"
      }
    })
    await queryInterface.addConstraint("conversations", {
      type : "foreign key", 
      name : "MESSAGE__TO_USER", 
      fields : ["to_user"], 
      references : {
        table : "users", 
        field : "id"
      }
    })

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('conversations');
  }
};
