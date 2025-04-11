import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/" style={{ marginRight: '20px' }}>Inicio</Link>
      <Link to="/about" style={{ marginRight: '20px' }}>Proyectos</Link>
      <HashLink smooth to="/#about-me" style={{ marginRight: '20px' }}>Sobre mí</HashLink>
      <Link to="/about" style={{ marginRight: '20px' }}>Contactame</Link>
    </nav>
  )
}

export default Navbar
