import { useDispatch, useSelector } from "react-redux"
import { filterPlanetsAction } from "../actions/planetsActions"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const InputFilter = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=> {
      const timer = setTimeout(() => {
        (dispatch (filterPlanetsAction(input)))
      }, 1000)

      return () => clearTimeout(timer)
  },[input])
  

  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
    navigate('/planets?page=1')
  }
  
  return (
    <>
      <form>
        <input type='text' placeholder="Type a planet..." onChange={handleChange} className='input__box'/>
      </form>
    </>
  )
}

export default InputFilter