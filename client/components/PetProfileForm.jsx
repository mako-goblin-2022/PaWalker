import React, { useState} from 'react'
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
    gender: '',
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
    if (!petformData.bio === ' ') {
      formErrors.bio = 'Bio Required'
    }

    // breed
    if (!petformData.breed === ' ') {
      formErrors.breed = 'Breed Required'
    }

    // gender
    if (!petformData.gender === ' ') {
      formErrors.gender = 'Gender Required'
    }

    // colour
    if (!petformData.colour === ' ') {
      formErrors.colour = 'Pet colour Required'
    }

    // neutered
    if (!petformData.neutered === ' ') {
      formErrors.neutered = 'Please tick if your pet is neutered'
    }
    // size
    if (!petformData.size === ' ') {
      formErrors.size = 'Please specify the size of your dog'
    }
    // age
    if (!petformData.age === ' ') {
      formErrors.age = 'Please specify your dogs age'
    }

    // image
    if (!petformData.img === ' ') {
      formErrors.img = 'Please upload an image'
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
    updateUser(token)
    // updateUser(form, token)
  }

  return (
    <>

      <form className='bg-slate-200 w-72 h-1/3 max-w-6xl mx-auto shadow-xl rounded-xl p-2 mb-2' name="petsForm" id="petsForm" onSubmit={(e) => handleSubmit(e)}>
        <p>
          <label htmlFor="name" className='text-sm ml-1 text-cyan-900 font-semibold'>
            Enter your Dog Name<span className="petsForm"></span>
          </label>
          <input className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
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
          <label htmlFor="location" className='text-sm ml-1 text-cyan-900 font-semibold'>
            Enter your Address <span className="petsForm"></span>
          </label>
          <input className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
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
          <label htmlFor="bio" className='text-sm ml-1 text-cyan-900 font-semibold'>
            enter a short Bio<span className="petsForm"></span>
          </label>
          <input className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
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
          <label htmlFor="breed" className='text-sm ml-1 text-cyan-900 font-semibold'>
            Enter Dog breed<span className="petsForm"></span>
          </label>
          <input className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
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
          <label htmlFor="gender" className='text-sm ml-1 text-cyan-900 font-semibold'>
            Select gender<span className="petsForm"></span>
          </label>
          <input className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
            type="text"
            id="gender"
            name="gender"
            autoComplete=""
            placeholder=""
            value={petformData.gender}
            onChange={handleChange}
          />
        </p>
        {errors.gender && (
          <span className="error-message">{errors.gender}</span>
        )}
        <p>
          <label htmlFor="colour" className='text-sm ml-1 text-cyan-900 font-semibold'>
            Enter Dog Colour<span className="petsForm"></span>
          </label>
          <input className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
            type="text"
            id="colour"
            name="colour"
            autoComplete=""
            placeholder=""
            value={petformData.colour}
            onChange={handleChange}
          />
        </p>
        {errors.colour && (
          <span className="error-message">{errors.colour}</span>
        )}
        <p>
          <label htmlFor="neutered" className='text-sm ml-1 text-cyan-900 font-semibold'>
            neutered<span className="petsForm"></span>
          </label>
          <input className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
            type="checkbox"
            id="neutered"
            name="neutered"
            autoComplete=""
            placeholder=""
            defaultChecked={petformData.neutered}
            onChange={() =>
              handleChange({
                target: { name: 'neutered', value: !petformData.neutered },
              })
            }
          />
        </p>
        {errors.neutered && (
          <span className="error-message">{errors.neutered}</span>
        )}
        <p>
          <label htmlFor="size">
            Enter the Size of your Dog<span className="petsForm"></span>
          </label>
          <input className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
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
          <label htmlFor="age" className='text-sm ml-1 text-cyan-900 font-semibold'>
            Enter your Dogs Age<span className="petsForm"></span>
          </label>
          <input className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
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
          <label htmlFor="img" className='text-sm ml-1 text-cyan-900 font-semibold'>
            Upload an image<span className="petsForm"></span>
          </label>
          <input className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
            type="image" alt=''
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
}

export default PetProfileForm