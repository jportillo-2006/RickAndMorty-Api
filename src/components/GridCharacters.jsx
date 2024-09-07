import React from 'react'

export const GridCharacters = ({ char }) => {
  return (
    <>
      <div className="d-flex flex-row row row-cols-5">
        {
          char && char.map((char) => (
            <div className="row mt-0">
              <div className="container card col-md-3 mb-2" style={{width: "30rem"}}>
                <img className="card-img-top" src={`${char.image}`} alt={char.name}/>
                  <div className="card-body">
                  <h2 className="card-title">{char.name}</h2>
                  <h5 className="card-text">{char.species}</h5>
                  </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}