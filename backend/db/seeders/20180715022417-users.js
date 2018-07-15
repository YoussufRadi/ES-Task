module.exports = {
  up: (queryInterface, Sequelize) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    queryInterface.bulkInsert(
      'Users',
      [
        {
          password: '$2a$10$skIZW/vsV4IYOU9kD5DUkeDGGRwE27PIa.gWtPdLSuoQ6LnWzQraC',
          name: 'Test',
          email: 'test@test.com',
        },
        {
          password: '$2a$10$skIZW/vsV4IYOU9kD5DUkeDGGRwE27PIa.gWtPdLSuoQ6LnWzQraC',
          name: 'Radi',
          email: 'youssuf.radi@gmail.com',
        },
        {
          password: '$2a$10$skIZW/vsV4IYOU9kD5DUkeDGGRwE27PIa.gWtPdLSuoQ6LnWzQraC',
          name: 'Yasser Abou El Saad',
          email: 'yasser@gmail.com',
        },
        {
          password: '$2a$10$skIZW/vsV4IYOU9kD5DUkeDGGRwE27PIa.gWtPdLSuoQ6LnWzQraC',
          name: 'Nesreen Mamdouh',
          email: 'nesreen@gmail.com',
          checkin_store_id: 2,
          checkin_store_name: 'Hilton',
          checkout_date: '12/09/2018',
          checkin_store_ref: '23A',
        },
        {
          password: '$2a$10$skIZW/vsV4IYOU9kD5DUkeDGGRwE27PIa.gWtPdLSuoQ6LnWzQraC',
          name: 'Mohamed Abd El-Hafiz',
          email: 'mabdelhafiz@gmail.com',
        },
        {
          password: '$2a$10$skIZW/vsV4IYOU9kD5DUkeDGGRwE27PIa.gWtPdLSuoQ6LnWzQraC',
          name: 'Mohamad Badr',
          email: 'mbadr@gmail.com',
        },
      ],
      {},
    ),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
