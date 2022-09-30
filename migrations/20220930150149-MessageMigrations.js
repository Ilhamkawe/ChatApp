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

    await queryInterface.createTable('messages', {
      id : {
        type : Sequelize.INTEGER, 
        allowNull : false, 
        primaryKey : true, 
        autoIncrement : true,
      }, 
      conversation_id : {
        type : Sequelize.INTEGER, 
        allowNull : false, 
      }, 
      user_id : {
        type : Sequelize.INTEGER, 
        allowNull : false
      }, 
      message : {
        type : Sequelize.STRING, 
        allowNUll : false
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

    await queryInterface.addConstraint('messages', {
      type : "foreign key", 
      name : "MESSAGE__CONVERSATION_ID", 
      fields : ["conversation_Id"], 
      references : {
        table : "conversations", 
        field : "id"
      }
    })

    await queryInterface.addConstraint('messages', {
      type : "foreign key", 
      name : "MESSAGE__USER_ID", 
      fields : ["user_id"], 
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
    await queryInterface.dropTable('messages');
  }
};
