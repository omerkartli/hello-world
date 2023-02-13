import React from 'react'
import Header from './Header'

export default function Container(props) {
  return (
    <div style={{width:"150px",height:"150px",border:"2px solid black",margin:"0px auto"}}>
      <Header baslik={props.title} >Merhaba Ben bir childrenim</Header>
      <p>{props.title} </p> 
      <p>{props.number} </p> 
       

      </div>
  )
}
