import { useState, useEffect } from 'react'
import axios from 'axios'
import './PokemonGrid.css'

function PokemonGrid() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        setLoading(true)
        const promises = []
        
        // Fetch 8 random Pokemon for 4x2 grid
        for (let i = 0; i < 8; i++) {
          const randomId = Math.floor(Math.random() * 1010) + 1
          promises.push(
            axios.get(`https://gottafetchthemall.onrender.com/pokedex/number/${randomId}`)
          )
        }
        
        const responses = await Promise.all(promises)
        const pokemonData = responses.map(response => response.data[0])
        setPokemon(pokemonData)
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRandomPokemon()
  }, [])

  const assignBackgroundColor = (type) => {
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
    }

    return {
      backgroundColor: typeColors[type] || "#A8A77A"
    }
  }

  const refreshPokemon = () => {
    setPokemon([])
    const fetchRandomPokemon = async () => {
      try {
        setLoading(true)
        const promises = []
        
        for (let i = 0; i < 8; i++) {
          const randomId = Math.floor(Math.random() * 1010) + 1
          promises.push(
            axios.get(`https://gottafetchthemall.onrender.com/pokedex/number/${randomId}`)
          )
        }
        
        const responses = await Promise.all(promises)
        const pokemonData = responses.map(response => response.data[0])
        setPokemon(pokemonData)
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRandomPokemon()
  }

  if (loading) {
    return (
      <section className="pokemon-section">
        <div className="section-header">
          <h2 className="section-title">Random Pokémon Collection</h2>
          <p className="section-subtitle">Discover amazing Pokémon from our comprehensive database</p>
        </div>
        <div className="loading-grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="pokemon-card loading-card">
              <div className="loading-spinner"></div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="pokemon-section">
      <div className="section-header">
        <h2 className="section-title">Random Pokémon Collection</h2>
        <p className="section-subtitle">Discover amazing Pokémon from our comprehensive database</p>
        <button className="refresh-btn" onClick={refreshPokemon}>
          🔄 Refresh Collection
        </button>
      </div>
      
      <div className="pokemon-grid">
        {pokemon.map((poke, index) => (
          <div className="pokemon-card" key={`${poke.id}-${index}`}>
            <div className="pokemon-image-container">
              <img src={poke.image} alt={poke.name} className="pokemon-image" />
            </div>
            <div className="pokemon-info">
              <h3 className="pokemon-name">
                <a href={`https://gottafetchthemall.onrender.com/pokedex/name/${poke.name}`} target="_blank" rel="noopener noreferrer">
                  {poke.name}
                </a>
              </h3>
              <div className="pokemon-types">
                <span 
                  className="pokemon-type" 
                  style={assignBackgroundColor(poke.first_type)}
                >
                  <a href={`https://gottafetchthemall.onrender.com/pokedex/type/${poke.first_type}`} target="_blank" rel="noopener noreferrer">
                    {poke.first_type}
                  </a>
                </span>
                {poke.second_type && (
                  <span 
                    className="pokemon-type" 
                    style={assignBackgroundColor(poke.second_type)}
                  >
                    <a href={`https://gottafetchthemall.onrender.com/pokedex/type/${poke.second_type}`} target="_blank" rel="noopener noreferrer">
                      {poke.second_type}
                    </a>
                  </span>
                )}
              </div>
              <div className="pokemon-ability">
                <a href={`https://gottafetchthemall.onrender.com/pokedex/ability/${poke.ability}`} target="_blank" rel="noopener noreferrer">
                  {poke.ability}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PokemonGrid
