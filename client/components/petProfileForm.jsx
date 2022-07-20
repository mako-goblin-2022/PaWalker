import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../apis/AuthApi'
//import { formStage, formSignup } from '../../store/rootSlice'

function PetProfileForm(SignupPet) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.user.token)

  // const InitialStage = useSelector((state) => state.FormStage)
  // const OwnerName = useSelector((state) => state.Owner.name)
  // const location = useSelector((state) => state.owner.location)
  // const bio = useSelector((state) => state.owner.bio)
  // const email = useSelector((state) => state.owner.email)
  // const phoneNumber = useSelector((state) => state.owner.phone)
  // const approachable = useSelector((state) => state.owner.approch)
  // const rank = useSelector((state) => state.walker.rank)
  // const img = useSelector((state) => state.owner.image)
  // const walker = useSelector((state) => state.walker.bool)
  // const owner = useSelector((state) => state.owner.bool)
  // form values initial state
  const [petformData, setpetFormData] = useState({
    name: '',
    location: '',
    bio: '',
    breed: '',
    gender: true,
    colour: '',
    neutered: true,
    size: '',
    age: '',
    img: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setpetFormData({
      ...petformData,
      [name]: value,
    })
  }

  const [errors, setErrors] = useState({})
  const validate = (formData) => {
    let formErrors = {}

    // name
    if (!petformData.name) {
      formErrors.name = 'Name required'
    }

    //location
    if (!petformData.location) {
      formErrors.location = 'address required'
    }

    // bio
    if (!petformData.bio == ' ') {
      formErrors.bio = 'Bio Required'
    }

    // breed
    if (!petformData.breed == ' ') {
      formErrors.breed = 'Breed Required'
    }

    // gender
    if (!petformData.gender == ' ') {
      formErrors.gender = 'Gender Required'
    }

    // colour
    if (!petformData.colour == ' ') {
      formErrors.colour = 'Pet colour Required'
    }

    // neutered
    if (!petformData.neutered == ' ') {
      formErrors.neutered = 'Please tick if your pet is neutered'
    }
    // size
    if (!petformData.size == ' ') {
      formErrors.size = 'Please specify the size of your dog'
    }
    // age
    if (!petformData.age == ' ') {
      formErrors.age = 'Please specify your dogs age'
    }

    // image
    if (!petformData.img == ' ') {
      formErrors.img = 'Please upload an image'
    }
  }
  return formErrors
}
const [isSubmitted, setIsSubmitted] = useState(false)
const handleSubmit = (e) => {
  e.preventDefault()
  setErrors(validate(petformData))
  console.log('check')
  //dispatch(saveUser(formData))
  // const { genderType, ...form } = formData
  // if (genderType === 'gender') {
  //   form.gender = true
  //   form.owner = false
  // } else {
  //   form.walker = false
  //   form.owner = true
  // }
  updateUser(form, token)
}

return (
  <>
    <h2>{'Signup Here'}</h2>
    <br></br>

    <form name="petsForm" id="petsForm" onSubmit={(e) => handleSubmit(e)}>
      <p>
        <label htmlFor="name">
          Pet Name<span className="petsForm"></span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete=""
          placeholder=""
          value={petformData.name}
          onChange={handleChange}
        />
      </p>
      {errors.name && <span className="error-message">{errors.name}</span>}

      <p>
        <label htmlFor="location">
          Please Enter a location <span className="petsForm"></span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          autoComplete=""
          placeholder=""
          value={petformData.location}
          onChange={handleChange}
        />
      </p>

      <p>
        <label htmlFor="bio">
          enter a short Bio<span className="petsForm"></span>
        </label>
        <input
          type="text"
          id="bio"
          name="bio"
          autoComplete=""
          placeholder=""
          value={petformData.bio}
          onChange={handleChange}
        />
      </p>
      {errors.bio && <span className="error-message">{errors.bio}</span>}

      <p>
        <label htmlFor="breed">
          breed<span className="petsForm"></span>
        </label>
        <input
          type="text"
          id="breed"
          name="breed"
          autoComplete=""
          placeholder=""
          value={petformData.breed}
          onChange={handleChange}
        />
      </p>
      {errors.breed && <span className="error-message">{errors.breed}</span>}

      <p>
        <label htmlFor="gender">
          gender<span className="petsForm"></span>
        </label>
        <input
          type="checkbox"
          id="gender"
          name="gender"
          autoComplete=""
          placeholder=""
          //value={!formData.approachable}
          defaultChecked={petformData.gender}
          onChange={() =>
            handleChange({
              target: { name: 'gender', value: !petformData.gender },
            })
          }
        />
      </p>
      {errors.gender && <span className="error-message">{errors.gender}</span>}
      <p>
        <label htmlFor="colour">
          email<span className="petsForm"></span>
        </label>
        <input
          type="text"
          id="colour"
          name="colour"
          autoComplete=""
          placeholder=""
          value={petformData.colour}
          onChange={handleChange}
        />
      </p>
      {errors.colour && <span className="error-message">{errors.colour}</span>}
      <p>
        <label htmlFor="neutered">
          neutered<span className="petsForm"></span>
        </label>
        <input
          type="checkbox"
          id="neutered"
          name="neutered"
          autoComplete=""
          placeholder=""
          //value={!formData.approachable}
          defaultChecked={petformData.neutered}
          onChange={() =>
            handleChange({
              target: { name: 'gender', value: !petformData.neutered },
            })
          }
        />
      </p>
      {errors.neutered && (
        <span className="error-message">{errors.neutered}</span>
      )}
      <p>
        <label htmlFor="size">
          size<span className="petsForm"></span>
        </label>
        <input
          type="text"
          id="size"
          name="size"
          autoComplete=""
          placeholder=""
          value={petformData.size}
          onChange={handleChange}
        />
      </p>
      {errors.size && <span className="error-message">{errors.size}</span>}

      <p>
        <label htmlFor="age">
          size<span className="petsForm"></span>
        </label>
        <input
          type="number"
          id="age"
          name="age"
          autoComplete=""
          placeholder=""
          value={petformData.age}
          onChange={handleChange}
        />
      </p>
      {errors.age && <span className="error-message">{errors.age}</span>}

      <p>
        <label htmlFor="img">
          Upload an image<span className="petsForm"></span>
        </label>
        <input
          type="image"
          id="img"
          name="img"
          autoComplete=""
          placeholder=""
          value={petformData.img}
          onChange={handleChange}
        />
      </p>
      {errors.img && <span className="error-message">{errors.img}</span>}

      <p className="disclaimer-text">
        <span className="petsForm"></span> required fields
      </p>

      <div className="Submit">
        <p>
          <input type="submit" value={'Submit'} />
        </p>
      </div>
    </form>
  </>
)

export default petProfileForm
