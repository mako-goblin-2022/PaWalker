import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../apis/AuthApi'
import Login from './Login'
import PetProfileForm from '../components/PetProfileForm'
import Header from './Header'
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
  const handleSubmit = (e) => {
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
    updateUser(form, token)
  }

  return (
    <div className='mx-auto text-center'>
      <Header />
      <h3 className='text-xl font-semibold mt-5'>Register</h3>
      <div className='flex w-full mx-auto justify-center'> 
        <form className='w-80 text-left m-2 text-slate-800 mt-1 bg-slate-100 shadow-xl rounded-2xl p-3 border border-slate-500' name="Ownersform" id="Ownersform" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name" className='text-sm ml-1 text-cyan-900 font-semibold'>
              Name<span className="OwnersForm"></span>
            </label>
          <p>
            <input className='w-11/12 bg-slate-200 text-blue-700 h-10 placeholder:w-11/12 m-1 py-2 px-2 rounded-xl text-center shadow-xl border border-slate-500'
              type="text"
              id="name"
              name="name"
              autoComplete=""
              placeholder=""
              value={formData.name}
              onChange={handleChange}
            />
          </p>
          {errors.name && <span className='error-message'>{errors.name}</span>}
          <p>
            <label htmlFor='location' className='text-sm ml-1 text-cyan-900 font-semibold'>
              Please Enter a location <span className='OwnersForm'></span>
            </label>
            <input className='w-11/12 bg-slate-200 text-blue-700 h-10 placeholder:w-11/12 m-1 py-2 px-2 rounded-xl text-center shadow-xl border border-slate-500'
              type="text"
              id="name"
              name="location"
              autoComplete=""
              placeholder=""
              value={formData.location}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor='bio' className='text-sm ml-1 text-cyan-900 font-semibold'>
              Enter a short Bio<span className='OwnersForm'></span>
            </label>
            <input className='w-11/12 bg-slate-200 text-blue-700 h-10 placeholder:w-11/12 m-1 py-2 px-2 rounded-xl text-center shadow-xl border border-slate-500'
              type="text"
              id="bio"
              name="bio"
              autoComplete=""
              placeholder=""
              value={formData.bio}
              onChange={handleChange}
            />
          </p>
          {errors.bio && <span className='error-message'>{errors.bio}</span>}
          <p>
            <label htmlFor='email' className='text-sm ml-1 text-cyan-900 font-semibold'>
              Email<span className='OwnersForm'></span>
            </label>
            <input className='w-11/12 bg-slate-200 text-blue-700 h-10 placeholder:w-11/12 m-1 py-2 px-2 rounded-xl text-center shadow-xl border border-slate-500'
              type="text"
              id="email"
              name="email"
              autoComplete=""
              placeholder=""
              value={formData.email}
              onChange={handleChange}
            />
          </p>
          {errors.email && <span className='error-message'>{errors.email}</span>}
          <p>
            <label htmlFor='phone_number' className='text-sm ml-1 text-cyan-900 font-semibold'>
              Phone Number<span className='OwnersForm'></span>
            </label>
            <input className='w-11/12 bg-slate-200 text-blue-700 h-10 placeholder:w-11/12 m-1 py-2 px-2 rounded-xl text-center shadow-xl border border-slate-500'
              type="number"
              id="phone_number"
              name="phone_number"
              autoComplete=""
              placeholder=""
              value={formData.phone_number}
              onChange={handleChange}
            />
          </p>
          {errors.phone_number && (
            <span className='error-message'>{errors.phone_number}</span>
          )}
          <p>
            <label htmlFor='approachable' className='text-sm ml-1 text-cyan-900 font-semibold'>
              approachable<span className='OwnersForm'></span>
            </label>
            <input className=''
              type="checkbox"
              id="approachable"
              name="approachable"
              autoComplete=""
              placeholder=""
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
            <input className='p-2'
              type="image" alt=''
              id="img"
              name="img"
              autoComplete=""
              placeholder=""
              value={formData.img}
              onChange={handleChange}
            />
          </p>
          {errors.img && <span className='error-message'>{errors.img}</span>}
          <p>
            <label htmlFor='walker' className='text-sm ml-1 text-cyan-900 font-semibold'>
              Are You a Walker?<span className='OwnersForm'></span>
            </label>
            <input className='p-2'
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
            <input className='p-2'
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
    </div>
  )
}

export default OwnerProfileForm
