import React from 'react'
import { TemaVerisi } from '../App'
import { useContext } from 'react'

export default function Icerik(){
    
  return (
    <div style={useContext(TemaVerisi)}>
        
        <h1> React öğreniyorum sersi</h1>
        <h2> useContext ile Componentler arası veri taşıma</h2>
        <p> Lorem amet tod ipsum sit amed. Lorem amet tod ipsum sit amed.  Lorem amet tod ipsum sit amed.  </p>
        <p> Lorem amet tod ipsum sit amed. Lorem amet tod ipsum sit amed.  Lorem amet tod ipsum sit amed.  </p>
        <p> Lorem amet tod ipsum sit amed. Lorem amet tod ipsum sit amed.  Lorem amet tod ipsum sit amed.  </p>
        <p> Lorem amet tod ipsum sit amed. Lorem amet tod ipsum sit amed.  Lorem amet tod ipsum sit amed.  </p>
        <p> Lorem amet tod ipsum sit amed. Lorem amet tod ipsum sit amed.  Lorem amet tod ipsum sit amed.  </p>
        <p> Lorem amet tod ipsum sit amed. Lorem amet tod ipsum sit amed.  Lorem amet tod ipsum sit amed.  </p>
        <p> Lorem amet tod ipsum sit amed. Lorem amet tod ipsum sit amed.  Lorem amet tod ipsum sit amed.  </p>
    </div>
  )
}
