import React from 'react'

const Card = ({pelicula}) => {
  return (
    <div>
      <h2>Cargaste la pelicula {pelicula.nombre}</h2>
      <h2>La misma fue dirigida por {pelicula.director}</h2>
      <h3>Gracias por compartirnos tu favorita!</h3>
    </div>
  )
}

export default Card