/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
  // Deletes ALL isting entries
  await knex('walkers').del()
  await knex('walkers').insert([
    {
      auth0_id: 1,
      name: 'Darlene',
      location: 'Mars',
      bio: 'Axis axis',
      email: 'yolo0@yolasite.com',
      phone_number: 9,
      approachable: true,
      rank: 'Bronze',
      img: './images/users/richard-Walker.jpg',
      walker: true,
      owner: false,
    },
    {
      auth0_id: 2,
      name: 'Max',
      location: 'Tauranga',
      bio: 'Columba palumbus',
      email: 'vmax1@census.gov',
      phone_number: 10,
      approachable: false,
      rank: 'Silver',
      img: './images/users/chris-Walker.jpg',
      walker: true,
      owner: false,
    },
    {
      auth0_id: 3,
      name: 'Darlene',
      location: 'Mars',
      bio: 'Axis axis',
      email: 'yolo0@yolasite.com',
      phone_number: 9,
      approachable: true,
      rank: 'Bronze',
      img: './images/users/wade-Walker.jpg',
      walker: true,
      owner: false,
    },
    {
      auth0_id: 4,
      name: 'Max',
      location: 'Tauranga',
      bio: 'Columba palumbus',
      email: 'vmax1@census.gov',
      phone_number: 10,
      approachable: false,
      rank: 'Silver',
      img: './images/users/sayo-walker.jpg',
      walker: true,
      owner: false,
    },
  ])
}
