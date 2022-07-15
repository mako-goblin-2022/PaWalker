const config = require('../knexfile')
const knex = require('knex')
const testDb = knex(config.test)
const { createUser } = require('../authDB')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run() //restarting database each time you test
})

const fakeUser = {
  auth0_id: 'auth0|007',
  name: 'Toothless',
  location: 'Toothland',
  bio: 'I wish I could chew.',
}

describe('createUser()', () => {
  it('Create a new user in the db', () => {
    return createUser(fakeUser, testDb)
      .then(() => {
        return testDb('users').select()
      })
      .then((user) => {
        expect(user).toHaveLength(7)
        expect(user[0].name).toBe('Charline')
      })
  })
})
