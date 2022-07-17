const request = require('supertest')
const server = require('../../server')
const { getUserById } = require('../../db/users.db')

jest.mock('../../db/users.db', () => ({
  getUserById: jest.fn(),
}))

const fakeUserData = {
  auth0_id: 1,
  name: 'Charline',
  location: 'Qalyūb',
  bio: 'Axis axis',
  email: 'cupward0@yolasite.com',
  phone_number: 11,
  approachable: true,
  rank: 'Bronze',
  img: './images/users/sample.jpg',
  walker: true,
  owner: false,
}

describe('GET /api/v1/users/:id', () => {
  it('fetch user by ID when resolves', () => {
    getUserById.mockImplementation(() => Promise.resolve(fakeUserData))
    expect.assertions(2)
    return request(server)
      .get('/api/v1/users/:id')
      .send({ id: 1 })
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toStrictEqual(fakeUserData)
      })
  })
})
