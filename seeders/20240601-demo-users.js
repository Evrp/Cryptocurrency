module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'alice',
        email: 'alice@example.com',
        password_hash: 'hashed_pass_1',
        KYC_status: 'VERIFIED',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'bob',
        email: 'bob@example.com',
        password_hash: 'hashed_pass_2',
        KYC_status: 'PENDING',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};