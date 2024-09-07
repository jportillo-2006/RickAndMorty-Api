import React from 'react'

export const FilterCharacters = ({ species, setSpecies, setPage, speciesOptions }) => {
    const handleSpeciesChange = (e) => {
        setSpecies(e.target.value)
        setPage(1)
    };

    return (
        <div className="form-group">
            <select className="form-control" value={species} onChange={handleSpeciesChange}>
                <option value="">Todas las especies</option>
                {speciesOptions.map((specie, index) => (
                    <option key={index} value={specie}>{specie}</option>
                ))}
            </select>
        </div>
    )
}