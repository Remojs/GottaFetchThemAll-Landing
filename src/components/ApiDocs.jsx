import './ApiDocs.css'

function ApiDocs() {
  const endpoints = [
    {
      title: "Get All Pokémon",
      method: "GET",
      endpoint: "/pokedex",
      description: "Retrieve all Pokémon from the database",
      example: "https://gottafetchthemall.onrender.com/pokedex"
    },
    {
      title: "Get Pokémon by ID",
      method: "GET", 
      endpoint: "/pokedex/number/{id}",
      description: "Get a specific Pokémon by their ID number",
      example: "https://gottafetchthemall.onrender.com/pokedex/number/25"
    },
    {
      title: "Get Pokémon by Name",
      method: "GET",
      endpoint: "/pokedex/name/{name}",
      description: "Search for a Pokémon by their name",
      example: "https://gottafetchthemall.onrender.com/pokedex/name/pikachu"
    },
    {
      title: "Get Pokémon by Type",
      method: "GET",
      endpoint: "/pokedex/type/{type}",
      description: "Get all Pokémon of a specific type",
      example: "https://gottafetchthemall.onrender.com/pokedex/type/electric"
    },
    {
      title: "Get Pokémon by Ability",
      method: "GET",
      endpoint: "/pokedex/ability/{ability}",
      description: "Find Pokémon with a specific ability",
      example: "https://gottafetchthemall.onrender.com/pokedex/ability/static"
    },
    {
      title: "Get Pokémon by Generation",
      method: "GET",
      endpoint: "/pokedex/generation/{gen}",
      description: "Get all Pokémon from a specific generation",
      example: "https://gottafetchthemall.onrender.com/pokedex/generation/1"
    }
  ]

  const stats = [
    { label: "Total Pokémon", value: "1,010", icon: "⚡" },
    { label: "Unique Abilities", value: "298", icon: "🎯" },
    { label: "Generations", value: "9", icon: "📚" },
    { label: "Types", value: "18", icon: "🔥" }
  ]

  return (
    <section className="api-docs">
      <div className="api-header">
        <h2 className="api-title">API Documentation</h2>
        <p className="api-subtitle">
          Complete RESTful API for Pokémon data with comprehensive endpoints
        </p>
      </div>

      <div className="api-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="endpoints-grid">
        {endpoints.map((endpoint, index) => (
          <div key={index} className="endpoint-card">
            <div className="endpoint-header">
              <span className="http-method">{endpoint.method}</span>
              <h3 className="endpoint-title">{endpoint.title}</h3>
            </div>
            
            <div className="endpoint-path">
              <code>{endpoint.endpoint}</code>
            </div>
            
            <p className="endpoint-description">{endpoint.description}</p>
            
            <div className="endpoint-example">
              <div className="example-label">Example:</div>
              <div className="example-url">
                <a href={endpoint.example} target="_blank" rel="noopener noreferrer">
                  {endpoint.example}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="api-footer">
        <div className="footer-content">
          <h3>Ready to start?</h3>
          <p>All endpoints return JSON data and support CORS for web applications.</p>
          <div className="footer-links">
            <a href="https://github.com/Remojs/GottaFetchThemAll-API" target="_blank" rel="noopener noreferrer">
              📖 Full Documentation
            </a>
            <a href="https://github.com/Remojs/GottaFetchThemAll-API#readme" target="_blank" rel="noopener noreferrer">
              🚀 Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApiDocs
