/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },

  async down() {
    return Promise.resolve();
  },
};
