import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formStage, formSignup } from '../../store/rootSlice'

function OwnerForm(SignupOwner) {
  const dispatch = useDispatch()

  const InitialStage = useSelector((state) => state.FormStage)
  const OwnerName = useSelector((state) => state.Owner.name)
  const PetName = useSelector((state) => state.pet.name)
  const PetImage = useSelector((state) => state.pet.img)
  const petQuantity = useSelector((state) => state.int)

  // form values initial state
  const [formData, setFormData] = useState({
    name: OwnerName || '',
    name: PetName || '',
    img: PetImage || '',
    quantity: petQuantity || '',
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

    //pet Name
    if (!formData.PetName) {
      formErrors.PetName = 'Name required'
    }

    // pet Image
    if (!formData.PetImage == ' ') formErrors.petImage = 'Image Required'
  }

  //pet Quantity
  if (!formData.petQuantity) {
    formErrors.petQuantity = 'Amount of pets required'
  }

  return formErrors
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
        name: Pet.name,
        img: Pet.img,
        quantity: pet.quantity,
      })
    )
  }
}, [formData, isSubmitted, dispatch, errors])

return (
  <>
    <h2>{SignupOwner || 'Signup as an Owner'}</h2>

    <form name="Ownersform" id="Ownersform" onSubmit={(e) => handleSubmit(e)}>
      <p>
        <label htmlFor="Ownername">
          Owners Name<span className="OwnersForm"></span>
        </label>
        <input
          type="text"
          id="name"
          name="Owner name"
          autoComplete="name"
          placeholder="name"
          value={formData.Owner.name}
          onChange={handleChange}
        />
      </p>
      {errors.name && <span className="error-message">{errors.name}</span>}

      <p>
        <label htmlFor="PetName">
          Pet Name<span className="OwnersForm"></span>
        </label>
        <input
          type="text"
          id="name"
          name="Pet Name"
          autoComplete="name"
          placeholder="name"
          value={formData.Pet.name}
          onChange={handleChange}
        />
      </p>

      <p>
        <label htmlFor="PetImg">
          Pets Image<span className="OwnersForm"></span>
        </label>
        <input
          type="Image"
          id="img"
          name="pet Image"
          autoComplete=""
          placeholder=""
          value={formData.pet.img}
          onChange={handleChange}
        />
      </p>
      {errors.image && <span className="error-message">{errors.PetImage}</span>}

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

export default OwnerProfileForm
