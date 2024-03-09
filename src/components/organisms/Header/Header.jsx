import NavBar from 'components/organisms/Navbar/Navbar.jsx'

const Header = () => {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <NavBar />
    </div>
  )
}

export default Header