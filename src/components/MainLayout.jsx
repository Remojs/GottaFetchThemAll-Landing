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
          <p>&copy; 2024 Gotta Fetch Them All API. Built with ❤️ by Thiago Zambonini</p>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
