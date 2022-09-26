import { useState } from "react"

const InputFilter = ({filter, setFilter}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Searching...')
  }

  const handleChange = (e) => {
    e.preventDefault()
    setFilter(e.target.value)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Type a planet..." onChange={handleChange} />
        <input type='submit' value='Search' />
      </form>
    </>
  )
}

export default InputFilter