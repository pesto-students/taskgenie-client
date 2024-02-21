import React from 'react'
import NavBar from './Navbar'

const Header = () => {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <NavBar />
    </div>
  )
}

export default Header