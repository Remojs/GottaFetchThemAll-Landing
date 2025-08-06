import logo from '../GCTA.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Gotta Fetch Them All" className="logo"/>
        <span className="navbar-title">Gotta Fetch Them All</span>
      </div>
      <div className="navbar-elements">
        <button className="nav-btn">
          <a href="https://github.com/Remojs/GottaFetchThemAll-API" target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        </button>
        <button className="nav-btn">
          <a href="https://github.com/Remojs/GottaFetchThemAll-API#readme" target="_blank" rel="noopener noreferrer">
            About
          </a>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
