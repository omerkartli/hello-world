import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
         <a href='#'>Ana Sayfa</a>
         <a href='#'>Hakkımızda</a>
         <a href='#'>İletişim</a>
         <a href='#'>Bize Ulaşın</a>
    </div>
  )
}

 export const AltNavbar= () => { /// büyük harfle başlamyı unutma
    return(
        <div className='altNavbar'></div>
    )
 }

export default Navbar;