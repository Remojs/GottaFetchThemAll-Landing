import Navbar from './Navbar'
import PokemonGrid from './PokemonGrid'
import ApiDocs from './ApiDocs'
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-content">
        <PokemonGrid />
        <ApiDocs />
      </main>
      <footer className="main-footer">
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/thiago-zambonini-2a279a239/" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/linkedin-svgrepo-com.svg" alt="LinkedIn" className="social-icon"/>
          </a>
          <a href="https://github.com/Remojs" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/github-svgrepo-com.svg" alt="GitHub" className="social-icon"/>
          </a>
          <a href="https://twitter.com/Remocodee" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/twitter-svgrepo-com.svg" alt="Twitter" className="social-icon"/>
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; 2024 Gotta Fetch Them All API.</p>
        </div>
      </footer>
      <div className="dev-footer">
        <span>developed by</span>
        <a href="https://interaktivesolutions.com" target="_blank" rel="noopener noreferrer" className="dev-footer-link">
          <img
            src="https://raw.githubusercontent.com/Remojs/Interaktive_QR-Manager/refs/heads/master/frontend/assets/logo.png"
            alt="Interaktive logo"
            className="dev-footer-logo"
          />
          INTERAKTIVE
        </a>
      </div>
    </div>
  )
}

export default MainLayout
