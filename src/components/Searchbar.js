import { useState } from "react"

const Searchbar = () => {
  const [input, setInput] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Searching...')
  }

  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
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

export default Searchbar