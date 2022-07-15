const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getUserById } = require('../users.db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('db.getUserById', () => {
  it('can get a user by id', () => {
    return getUserById(1, testDb).then((user) => {
      expect.assertions(1)
      console.log(user)
      expect(user).toBeTruthy()
    })
  })
})
