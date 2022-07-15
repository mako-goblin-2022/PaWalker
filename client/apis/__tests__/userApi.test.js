import nock from 'nock'
import { getUserById } from '../usersApi'

const fakeUserId = 1

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

describe('getUserById', () => {
  it('returns a user profile', async () => {
    const scope = nock('http://localhost')
      .get(`/api/v1/users/${fakeUserId}`)
      .reply(200, fakeUserData)

    const result = await getUserById(fakeUserId)
    console.log(result)
    console.log(scope)
    expect(scope).toStrictEqual(result)
    expect(scope).not.toBe('hi')
  })
})
