/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      auth0_id: 'auth0|001',
      name: 'Rodrigo Reis',
      email: 'onlinebordados@gmail.com',
      password: '123456',
     
    },
    {
      auth0_id: 'auth0|002',
      name: 'Caio R',
      email: 'caio@gmail.com',
      password: 'cacaca',
     
    },
    {
      auth0_id: 'auth0|003',
      name: 'Anna',
      email: 'anna@gmail.com',
      password: '12345678',
     
    },
    {
      auth0_id: 'auth0|004',
      name: 'Ben',
      email: 'ben@gmail.com',
      password: '321456',
     
    },    
    {
      auth0_id: 'auth0|005',
      name: 'Lani',
      email: 'lani@gmail.com',
      password: '1973465',
     
    },
    {
      auth0_id: 'auth0|006',
      name: 'Sarah',
      email: 'sarah@gmail.com',
      password: '987456',
     
    },        
  ])
}
