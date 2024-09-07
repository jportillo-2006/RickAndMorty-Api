import React, { useState } from 'react'

export const SearchCharacter = ({setSearch,setPage}) => {
  const [inputValue, setInputValue] = useState('')

  const handleSearch = () => {
    setPage(1)
    setSearch(inputValue)
  }

  return (
    <form className='d-flex'>
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Buscar personaje" 
        className='form-control me-2'
      />
      <button 
        type="button" 
        onClick={handleSearch}
        className='btn btn-success'
      >
        Buscar
      </button>
    </form>
  )
}

export default SearchCharacter