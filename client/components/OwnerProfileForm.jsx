import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import { formStage, formSignup } from '../../store/rootSlice'

function OwnerProfileForm(SignupOwner) {
  const dispatch = useDispatch()

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
    approachable: '',
    rank: '',
    img: '',
    walker: '',
    owner: '',
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
    if (!formData.OwnerName) {
      formErrors.OwnerName = 'Name required'
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
    email = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    )
    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = 'Valid Email required'
    }

    // phone
    if (!formData.phone_number == ' ') {
      formErrors.phone = 'Phone number Required'
    }

    // approch
    if (!formData.approachable == ' ') {
      formErrors.approch =
        'Please click on the button which relects your approach status'
    }

    // image
    if (!formData.img == ' ') {
      formErrors.image = 'Please upload an image'
    }

    // isWalker
    if (!formData.walker == ' ') {
      formErrors.walker.bool = 'Please identify as a Walker or Owner'
    }

    // isOwner
    if (!formData.owner == ' ') {
      formErrors.owner.bool = 'Please identify as an Owner or walker'
    }

    const [isSubmitted, setIsSubmitted] = useState(false)
    const handleSubmit = (e) => {
      e.preventDefault()
      setErrors(validate(formData))
      setIsSubmitted(true)
    }

    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitted) {
        dispatch(formStage(2))
        dispatch(
          formSignup({
            name: Owner.name,
            location: owner.location,
            bio: owner.bio,
            email: owner.email,
            phone_number: phone,
            approachable: approch,
            rank: rank,
            img: image,
            walker: walker,
            owner: owner,
          })
        )
      }
    }, [formData, isSubmitted, dispatch, errors])

    return (
      <>
        <h2>{SignupOwner || 'Signup as an Owner'}</h2>

        <form
          name="Ownersform"
          id="Ownersform"
          onSubmit={(e) => handleSubmit(e)}
        >
          <p>
            <label htmlFor="Ownername">
              Owners Name<span className="OwnersForm"></span>
            </label>
            <input
              type="text"
              id="name"
              name="Owner name"
              autoComplete="enter name"
              placeholder="enter name"
              value={formData.Owner.name}
              onChange={handleChange}
            />
          </p>
          {errors.name && <span className="error-message">{errors.name}</span>}

          <p>
            <label htmlFor="location">
              <span className="OwnersForm"></span>
            </label>
            <input
              type="text"
              id="name"
              name="location"
              autoComplete="enter location"
              placeholder="enter location"
              value={formData.owner.location}
              onChange={handleChange}
            />
          </p>

          <p>
            <label htmlFor="bio">
              Pets Image<span className="OwnersForm"></span>
            </label>
            <input
              type="text"
              id="img"
              name="Bio"
              autoComplete=""
              placeholder=""
              value={formData.pet.img}
              onChange={handleChange}
            />
          </p>
          {errors.image && (
            <span className="error-message">{errors.PetImage}</span>
          )}

          <p>
            <label htmlFor="PetQuantity">
              Pet Quantity<span className="OwnersForm"></span>
            </label>
            <input
              type="Interger"
              id="Int"
              name="pet Quantity"
              placeholder="0"
              value={formData.Pet.quantity}
              onChange={handleChange}
            />
          </p>
          {errors.quantity && (
            <span className="error-message">{errors.petQuantity}</span>
          )}

          <p className="disclaimer-text">
            <span className="OwnersForm"></span> required fields
          </p>

          <div className="Submit">
            {previousButton && (
              <p>
                <input
                  type="submit"
                  value={`Back`}
                  onClick={() => dispatch(formStage(currentStage - 1))}
                />
              </p>
            )}
            <p>
              <input type="submit" value={submitButton || 'Submit'} />
            </p>
          </div>
        </form>
      </>
    )
  }
}

export default OwnerProfileForm
