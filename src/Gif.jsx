import React from 'react'

export const Gif = ({imagen}) => {
  return (
    <>
    <div className="card">
    <p>{ imagen.title }</p>
    <img src={ imagen.url } alt={ imagen.title } />
    </div>
    </>
  )
}
