import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../apis/AuthApi'
import Login from './Login'
import PetProfileForm from '../components/PetProfileForm'
import { Navigate } from 'react-router-dom'

function OwnerProfileForm(SignupOwner) {
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
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    bio: '',
    email: '',
    phone_number: '',
    approachable: true,
    img: '',
    userType: 'walker',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const [errors, setErrors] = useState({})
  const validate = (formData) => {
    let formErrors = {}

    // name
    if (!formData.name) {
      formErrors.name = 'Name required'
    }

    //location
    if (!formData.location) {
      formErrors.location = 'address required'
    }

    // bio
    if (!formData.bio == ' ') {
      formErrors.bio = 'Bio Required'
    }

    //email
    const emailRegex = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    )
    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = 'Valid Email required'
    }

    // phone
    if (!formData.phone_number === ' ') {
      formErrors.phone_number = 'Phone number Required'
    }

    // approch
    if (!formData.approachable === ' ') {
      formErrors.approachable =
        'Please click on the button which relects your approach status'
    }

    // image
    if (!formData.img === ' ') {
      formErrors.img = 'Please upload an image'
    }

    // isWalker
    if (!formData.walker === ' ') {
      formErrors.walker = 'Please identify as a Walker or Owner'
    }

    // isOwner
    if (!formData.owner === ' ') {
      formErrors.owner = 'Please identify as an Owner or walker'
    }
    return formErrors
  }
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors(validate(formData))
    console.log('check')
    //dispatch(saveUser(formData))
    const { userType, ...form } = formData
    if (userType === 'walker') {
      form.walker = true
      form.owner = false
    } else {
      form.walker = false
      form.owner = true
    }
    try {
      await updateUser(form, token)
      Navigate('/pets')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='mx-auto justify-center text-slate-900'>
      <form
        className='bg-slate-200 w-72 h-1/3 max-w-6xl mx-auto shadow-xl rounded-xl p-2 mb-2'
        name='Ownersform'
        id='Ownersform'
        onSubmit={(e) => handleSubmit(e)}
      >
        <p>
          <label htmlFor='name' className='text-sm ml-1 text-cyan-900 font-semibold'>
            Owners Name<span className='OwnersForm'></span>
          </label>
          <input
            className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
            type='text'
            id='name'
            name='name'
            autoComplete=''
            placeholder=''
            value={formData.name}
            onChange={handleChange}
          />
        </p>
        {errors.name && <span className='error-message'>{errors.name}</span>}

        <p>
          <label htmlFor='location' className='text-sm ml-1 text-cyan-900 font-semibold'>
            Please Enter a location <span className='OwnersForm'></span>
          </label>
          <input
            className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
            type='text'
            id='name'
            name='location'
            autoComplete=''
            placeholder=''
            value={formData.location}
            onChange={handleChange}
          />
        </p>

        <p>
          <label htmlFor='bio' className='text-sm ml-1 text-cyan-900 font-semibold'>
            Enter a short Bio<span className='OwnersForm'></span>
          </label>
          <input
            className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
            type='text'
            id='bio'
            name='bio'
            autoComplete=''
            placeholder=''
            value={formData.bio}
            onChange={handleChange}
          />
        </p>
        {errors.bio && <span className='error-message'>{errors.bio}</span>}

        <p>
          <label htmlFor='email' className='text-sm ml-1 text-cyan-900 font-semibold'>
            Email<span className='OwnersForm'></span>
          </label>
          <input
            className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
            type='text'
            id='email'
            name='email'
            autoComplete=''
            placeholder=''
            value={formData.email}
            onChange={handleChange}
          />
        </p>
        {errors.email && <span className='error-message'>{errors.email}</span>}
        <p>
          <label
            htmlFor='phone_number'
            className='text-sm ml-1 text-cyan-900 font-semibold'
          >
            Phone Number<span className='OwnersForm'></span>
          </label>
          <input
            className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
            type='number'
            id='phone_number'
            name='phone_number'
            autoComplete=''
            placeholder=''
            value={formData.phone_number}
            onChange={handleChange}
          />
        </p>
        {errors.phone_number && (
          <span className='error-message'>{errors.phone_number}</span>
        )}
        <p>
          <label
            htmlFor='approachable'
            className='text-sm ml-1 text-cyan-900 font-semibold'
          >
            approachable<span className='OwnersForm'></span>
          </label>
          <input
            className='px-10 py-1 m-1 rounded-xl bg-slate-300 border-none'
            type='checkbox'
            id='approachable'
            name='approachable'
            autoComplete=''
            placeholder=''
            //value={!formData.approachable}
            defaultChecked={formData.approachable}
            onChange={() =>
              handleChange({
                target: { name: 'approachable', value: !formData.approachable },
              })
            }
          />
        </p>
        {errors.approachable && (
          <span className='error-message'>{errors.approachable}</span>
        )}
        <p>
          <label htmlFor='img' className='text-sm ml-1 text-cyan-900 font-semibold'>
            Upload an image<span className='OwnersForm'></span>
          </label>
          <input
            type='image'
            alt=''
            id='img'
            name='img'
            autoComplete=''
            placeholder=''
            value={formData.img}
            onChange={handleChange}
          />
        </p>
        {errors.img && <span className='error-message'>{errors.img}</span>}
        <p>
          <label htmlFor='walker' className='text-sm ml-1 text-cyan-900 font-semibold'>
            Are You a Walker?<span className='OwnersForm'></span>
          </label>
          <input
            type='radio'
            id='walker'
            name='userType'
            autoComplete=''
            placeholder=''
            value={'walker'}
            checked={formData.userType === 'walker'}
            onChange={handleChange}
          />
        </p>
        {errors.walker && <span className='error-message'>{errors.walker}</span>}
        <p>
          <label htmlFor='owner' className='text-sm ml-1 text-cyan-900 font-semibold'>
            Are you an Owner?<span className='OwnersForm'></span>
          </label>
          <input
            type='radio'
            id='owner'
            name='userType'
            autoComplete=''
            placeholder=''
            value={'owner'}
            checked={formData.userType === 'owner'}
            onChange={handleChange}
          />
        </p>
        {errors.owner && <span className='error-message'>{errors.owner}</span>}

        <p className='disclaimer-text'>
          <span className='OwnersForm'></span> required fields
        </p>

        <div className='Submit'>
          <p>
            <input type='submit' value={'Submit'} />
          </p>
        </div>
      </form>
      {formData.userType === 'owner' && <PetProfileForm />}
    </div>
  )
}

export default OwnerProfileForm
