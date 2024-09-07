import React, { useEffect, useState } from 'react'

const useCharacter = (page, search, species) => {
    const [character, setCharacter] = useState([])
    const [info, setInfo] = useState();
    const [speciesOptions, setSpeciesOptions] = useState([
        "Human", "Alien", "Humanoid", "Poopybutthole",
        "Mythological", "Animal", "Robot", "Cronenberg","Unknown"
    ])

    const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&species=${species}`

    useEffect(() => {
        fetch(url).then((resp) => resp.json()).then((data) =>{
            if(data.error){
                setCharacter(data.error)
            }else{
                setCharacter(data.results)
                setInfo(data.info)
            }
          } )
      }, [url])

    return{
        character,
        info,
        speciesOptions
    }
}

export default useCharacter