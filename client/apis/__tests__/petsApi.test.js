import nock from 'nock'
import { getPetsByUserId } from '../petsApi'

const fakeUserId = 1

const fakePetData = {
  id: 1,
  owner_id: 1,
  name: 'Zeke',
  bio: 'Ara chloroptera',
  breed: 'Red and blue macaw',
  gender: 'Male',
  colour: 'Teal',
  neutured: false,
  size: '3XL',
  age: 5,
  img: '',
}

describe('getPetById', () => {
  it('returns a user profile', async () => {
    const scope = nock('http://localhost')
      .get(`/api/v1/pets/${fakeUserId}`)
      .reply(200, fakePetData)

    const result = await getPetsByUserId(fakeUserId)
    expect.assertions(2)
    expect(scope).toBeTruthy()
    expect(result).toEqual(fakePetData)
    scope.done()
  })
})
