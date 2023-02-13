import React from 'react'

export default function Header(props) {
  return (
    <div style={{width:"inherit",height:"55px",backgroundColor:"black",color:"white"}}>
        {props.baslik}
        {props.children}
    </div>
  )
}
