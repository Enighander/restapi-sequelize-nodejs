'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('notes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
        title: { 
        type: Sequelize.STRING
    },
        descrption: { 
        type: Sequelize.STRING
    },
        createdAt: { 
        type: Sequelize.DATE,
        allowNull: false
    },
        updatedAt: { 
        type: Sequelize.DATE,
        allowNull: false
    }
  });
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
