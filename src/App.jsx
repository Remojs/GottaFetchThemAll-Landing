import './App.css'
import logo from './GCTA.png'
import socialGh from '../public/github-svgrepo-com.svg'
import socialTw from '../public/twitter-svgrepo-com.svg'
import socialLk from '../public/linkedin-svgrepo-com.svg'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [poke, setPoke] = useState([])

  useEffect(() => {
    const getRandom = async () => {
      const { data } = await axios.get(`https://gottafetchthemall.onrender.com/pokedex/number/${Math.floor(Math.random() * 1010) + 1}`);
      setPoke(prevPoke => [...prevPoke, data[0]]);
    }


    getRandom()
    getRandom()
    getRandom()
    getRandom()
    getRandom()
    getRandom()
    getRandom()
    getRandom()
  }, []);

  const assignBackgroundColor = (type) =>  {
    const typeColors = {
        "normal": "#A8A77A",
        "fire": "#EE8130",
        "water": "#6390F0",
        "electric": "#F7D02C",
        "grass": "#7AC74C",
        "ice": "#96D9D6",
        "fighting": "#C22E28",
        "poison": "#A33EA1",
        "ground": "#E2BF65",
        "flying": "#A98FF3",
        "psychic": "#F95587",
        "bug": "#A6B91A",
        "rock": "#B6A136",
        "ghost": "#735797",
        "dragon": "#6F35FC",
        "dark": "#705746",
        "steel": "#B7B7CE",
        "fairy": "#D685AD",
    };

    return {
        backgroundColor: typeColors[type]
    };
}

  return (
    <>
      <nav className="landing-nav">
        <div className="nav-logo">
          <img src={logo} alt="" className='logo'/>
        </div>
        <div className="nav-elements">
          <button className="about-btn"> <a className='about-a' href="https://github.com/Remojs/GottaFetchThemAll-API"> Repository </a> </button>
          <button className="about-btn"> <a className='about-a' href="https://github.com/Remojs/GottaFetchThemAll-API#readme"> About </a> </button>
        </div>
      </nav>

      <div className="title">
        <h1 className="title-word"> Gotta Fetch Them All </h1>
        <h6 className="subtitle"> The  Pokemon API </h6>
      </div>

      <div className="pokemon-center-cards">
        <div className="pokemons">
          
          {poke.map((poke, index) => (
            <div className="border-pokemon-card" key={index}>
              <div className="pokemon-card">
                <img src={poke.image} alt="" className="pokemon-img" />
                <div className="pokemon-data">
                  <h2 className="pokemon-name"> <a href={`https://gottafetchthemall.onrender.com/pokedex/name/${poke.name}`}>{poke.name}</a></h2>
                    <div className="type-box">
                      <h4 className="pokemon-type-one" style={assignBackgroundColor(poke.first_type)}><a href={`https://gottafetchthemall.onrender.com/pokedex/type/${poke.first_type}`}>{poke.first_type}</a></h4>
                      <h4 className="pokemon-type-two" style={assignBackgroundColor(poke.second_type)}><a href={`https://gottafetchthemall.onrender.com/pokedex/type/${poke.second_type}`}>{poke.second_type}</a></h4>
                    </div>
                  <h6 className="ability"><a href={`https://gottafetchthemall.onrender.com/pokedex/ability/${poke.ability}`}>{poke.ability}</a></h6>
                </div>
              </div> 
            </div>
          ))}
        </div>
      </div>

      <div className="footer">

        <h2>Enjoy the API with:</h2>

        <div className="data">
          <p className="data-values">  Pokemons: <span className='data-value'> 1017 </span> </p>
          <p className="data-values">  Abilitys: <span className='data-value'> 301 </span> </p>
          <p className="data-values">  Generations: <span className='data-value'> 9 </span> </p>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/thiago-zambonini-2a279a239/" className="social-icon"> <img className='social-icon' src={socialLk} alt="" /></a>
          <a href="https://github.com/Remojs" className="social-icon"> <img className='social-icon' src={socialGh}  alt="" /></a>
          <a href="https://twitter.com/Remocodee" className="social-icon"> <img className='social-icon' src={socialTw}  alt="" /></a>
        </div>
      </div>

    </>
  )
}

export default App
