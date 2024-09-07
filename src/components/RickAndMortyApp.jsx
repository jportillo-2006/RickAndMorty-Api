import React, { useState } from 'react'
import { SearchCharacter } from './SearchCharacter'
import { GridCharacters } from './GridCharacters'
import useCharacter from '../hooks/useCharacter'
import { FilterCharacters } from './FilterCharacters'
import { PaginationCharacters } from './PaginationCharacters'

export const RickAndMortyApp = () => {
    const [page, setPage] = useState(1)
    const [search,setSearch] = useState("")
    const [species, setSpecies] = useState("")
    const {character, info, speciesOptions} = useCharacter(page, search, species)

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const handleNextPage = () => {
        if (info && page < info.pages) {
            setPage(page + 1)
        }
    }
  
    return (
        <>
        <div className='container mt-4 w-0'>
            <SearchCharacter  setSearch={setSearch} setPage={setPage}/>
        </div>

        <div className='container d-flex flex-row'>
        <FilterCharacters species={species} setSpecies={setSpecies} setPage={setPage} speciesOptions={speciesOptions}/>
        </div>

        <br></br>

        <div>
        <GridCharacters char={character} />
        </div>
        
        <PaginationCharacters page={page} info={info} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage}/>
        </>
    )
}