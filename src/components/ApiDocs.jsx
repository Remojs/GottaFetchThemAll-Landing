import { useState } from 'react'
import './ApiDocs.css'

const BASE_URL = 'https://gottafetchthemall.onrender.com'

const VALID_TYPES = [
  'normal', 'fire', 'water', 'grass', 'flying', 'fighting',
  'poison', 'electric', 'ground', 'rock', 'psychic', 'ice',
  'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy',
]

const VALID_STATS = ['hp', 'attack', 'defense', 'special_attack', 'special_defense', 'speed']

const GENERATIONS = [
  { gen: 1, range: '1–151' },
  { gen: 2, range: '152–251' },
  { gen: 3, range: '252–386' },
  { gen: 4, range: '387–494' },
  { gen: 5, range: '495–649' },
  { gen: 6, range: '650–721' },
  { gen: 7, range: '722–809' },
  { gen: 8, range: '810–905' },
  { gen: 9, range: '906–1010' },
]

const endpoints = [
  {
    id: 1,
    path: '/pokedex',
    title: 'Get All Pokémon',
    description: 'Returns all Pokémon with pagination. Supports filtering by primary type, secondary type, and ability.',
    queryParams: [
      { name: 'page', type: 'number', required: false, description: 'Page number (default: 1)' },
      { name: 'limit', type: 'number', required: false, description: 'Results per page, max 200 (default: 100)' },
      { name: 'first_type', type: 'string', required: false, description: 'Filter by primary type' },
      { name: 'second_type', type: 'string', required: false, description: 'Filter by secondary type' },
      { name: 'ability', type: 'string', required: false, description: 'Filter by exact ability name' },
    ],
    pathParams: [],
    statusCodes: [{ code: 200, label: 'success', description: 'Paginated response object' }],
    responseExample: `{
  "data": [
    {
      "_id": "6394ccde0444413377f32893",
      "ID": 4,
      "name": "charmander",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      "first_type": "fire",
      "second_type": null,
      "ability": "blaze",
      "height": "0.6m",
      "weight": "8.5kg",
      "stats": { "hp": 39, "attack": 52, "defense": 43, "special_attack": 60, "special_defense": 50, "speed": 65 }
    }
  ],
  "total": 1010,
  "page": 2,
  "limit": 50,
  "pages": 21
}`,
    example: `${BASE_URL}/pokedex?page=2&limit=50&first_type=fire`,
  },
  {
    id: 2,
    path: '/pokedex/between',
    title: 'Get Pokémon by ID Range',
    description: 'Returns all Pokémon whose Pokédex number is within the specified range.',
    queryParams: [
      { name: 'min', type: 'number', required: true, description: 'Minimum Pokédex ID' },
      { name: 'max', type: 'number', required: true, description: 'Maximum Pokédex ID' },
    ],
    pathParams: [],
    statusCodes: [{ code: 200, label: 'success', description: 'Array of Pokémon' }],
    responseExample: `[
  { "ID": 1, "name": "bulbasaur", "first_type": "grass", "second_type": "poison", ... },
  { "ID": 2, "name": "ivysaur",   "first_type": "grass", "second_type": "poison", ... },
  ...
]`,
    example: `${BASE_URL}/pokedex/between?min=1&max=50`,
  },
  {
    id: 3,
    path: '/pokedex/random',
    title: 'Get Random Pokémon',
    description: 'Returns one or more random Pokémon.',
    queryParams: [
      { name: 'count', type: 'number', required: false, description: 'Number of Pokémon to return, max 10 (default: 1)' },
    ],
    pathParams: [],
    statusCodes: [{ code: 200, label: 'success', description: 'Array of Pokémon' }],
    responseExample: `[
  {
    "_id": "6394ccde0444413377f32897",
    "ID": 133,
    "name": "eevee",
    "first_type": "normal",
    "second_type": null,
    "ability": "run-away",
    "height": "0.3m",
    "weight": "6.5kg",
    "stats": { "hp": 55, "attack": 55, "defense": 50, "special_attack": 45, "special_defense": 65, "speed": 55 }
  }
]`,
    example: `${BASE_URL}/pokedex/random?count=3`,
  },
  {
    id: 4,
    path: '/pokedex/types',
    title: 'Get All Types',
    description: 'Returns the list of all unique types present in the database, sorted alphabetically.',
    queryParams: [],
    pathParams: [],
    statusCodes: [{ code: 200, label: 'success', description: 'Sorted array of type strings' }],
    responseExample: `["bug", "dark", "dragon", "electric", "fairy", "fighting",
 "fire", "flying", "ghost", "grass", "ground", "ice",
 "normal", "poison", "psychic", "rock", "steel", "water"]`,
    example: `${BASE_URL}/pokedex/types`,
  },
  {
    id: 5,
    path: '/pokedex/abilities',
    title: 'Get All Abilities',
    description: 'Returns the list of all unique abilities present in the database, sorted alphabetically.',
    queryParams: [],
    pathParams: [],
    statusCodes: [{ code: 200, label: 'success', description: 'Sorted array of ability strings' }],
    responseExample: `["blaze", "chlorophyll", "compound-eyes", "overgrow", "run-away", "static", "torrent", ...]`,
    example: `${BASE_URL}/pokedex/abilities`,
  },
  {
    id: 6,
    path: '/pokedex/gen/:gen',
    title: 'Get Pokémon by Generation',
    description: 'Returns all Pokémon from a specific generation.',
    queryParams: [],
    pathParams: [
      { name: 'gen', type: 'string', required: true, description: 'Generation number — valid values: 1 to 9' },
    ],
    statusCodes: [
      { code: 200, label: 'success', description: 'Array of Pokémon' },
      { code: 500, label: 'error', description: 'Invalid generation' },
    ],
    responseExample: `[
  { "ID": 1,   "name": "bulbasaur", "first_type": "grass",   "second_type": "poison", ... },
  { "ID": 2,   "name": "ivysaur",   "first_type": "grass",   "second_type": "poison", ... },
  ...
  { "ID": 151, "name": "mew",       "first_type": "psychic", "second_type": null,    ... }
]`,
    example: `${BASE_URL}/pokedex/gen/1`,
  },
  {
    id: 7,
    path: '/pokedex/name/:name',
    title: 'Get Pokémon by Name',
    description: 'Searches Pokémon by name. The search is partial and case-insensitive — searching "char" returns Charmander, Charmeleon, and Charizard.',
    queryParams: [],
    pathParams: [
      { name: 'name', type: 'string', required: true, description: 'Name or partial name to search' },
    ],
    statusCodes: [{ code: 200, label: 'success', description: 'Array of matching Pokémon' }],
    responseExample: `[
  { "ID": 4, "name": "charmander", "first_type": "fire", "second_type": null,    ... },
  { "ID": 5, "name": "charmeleon", "first_type": "fire", "second_type": null,    ... },
  { "ID": 6, "name": "charizard",  "first_type": "fire", "second_type": "flying", ... }
]`,
    example: `${BASE_URL}/pokedex/name/char`,
  },
  {
    id: 8,
    path: '/pokedex/number/:id',
    title: 'Get Pokémon by Number',
    description: 'Returns the Pokémon with the specified Pokédex number.',
    queryParams: [],
    pathParams: [
      { name: 'id', type: 'number', required: true, description: 'Pokédex number' },
    ],
    statusCodes: [
      { code: 200, label: 'success', description: 'Array with one Pokémon' },
      { code: 500, label: 'error', description: 'ID is not a number' },
    ],
    responseExample: `[
  {
    "_id": "6394ccde0444413377f32891",
    "ID": 25,
    "name": "pikachu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "first_type": "electric",
    "second_type": null,
    "ability": "static",
    "height": "0.4m",
    "weight": "6kg",
    "stats": { "hp": 35, "attack": 55, "defense": 40, "special_attack": 50, "special_defense": 50, "speed": 90 }
  }
]`,
    example: `${BASE_URL}/pokedex/number/25`,
  },
  {
    id: 9,
    path: '/pokedex/type/:type',
    title: 'Get Pokémon by Type',
    description: 'Returns all Pokémon that have the specified type as either first_type or second_type.',
    queryParams: [],
    pathParams: [
      { name: 'type', type: 'string', required: true, description: 'Type name (see valid values in Overview)' },
    ],
    statusCodes: [
      { code: 200, label: 'success', description: 'Array of Pokémon' },
      { code: 500, label: 'error', description: 'Invalid type' },
    ],
    responseExample: `[
  { "ID": 6,   "name": "charizard",  "first_type": "fire", "second_type": "flying", ... },
  { "ID": 12,  "name": "butterfree", "first_type": "bug",  "second_type": "flying", ... },
  { "ID": 17,  "name": "pidgeotto",  "first_type": "normal", "second_type": "flying", ... },
  ...
]`,
    example: `${BASE_URL}/pokedex/type/flying`,
  },
  {
    id: 10,
    path: '/pokedex/dual-type/:first/:second',
    title: 'Get Pokémon by Dual Type',
    description: 'Returns all Pokémon that have exactly both specified types, in any order.',
    queryParams: [],
    pathParams: [
      { name: 'first', type: 'string', required: true, description: 'First type' },
      { name: 'second', type: 'string', required: true, description: 'Second type' },
    ],
    statusCodes: [{ code: 200, label: 'success', description: 'Array of Pokémon' }],
    responseExample: `[
  { "ID": 6,   "name": "charizard", "first_type": "fire", "second_type": "flying", ... },
  { "ID": 146, "name": "moltres",   "first_type": "fire", "second_type": "flying", ... },
  { "ID": 250, "name": "ho-oh",     "first_type": "fire", "second_type": "flying", ... }
]`,
    example: `${BASE_URL}/pokedex/dual-type/fire/flying`,
  },
  {
    id: 11,
    path: '/pokedex/ability/:ability',
    title: 'Get Pokémon by Ability',
    description: 'Returns all Pokémon with the specified ability. The search is partial and case-insensitive.',
    queryParams: [],
    pathParams: [
      { name: 'ability', type: 'string', required: true, description: 'Ability name or partial name' },
    ],
    statusCodes: [{ code: 200, label: 'success', description: 'Array of Pokémon' }],
    responseExample: `[
  { "ID": 25,  "name": "pikachu",  "ability": "static", ... },
  { "ID": 26,  "name": "raichu",   "ability": "static", ... },
  { "ID": 100, "name": "voltorb",  "ability": "static", ... }
]`,
    example: `${BASE_URL}/pokedex/ability/static`,
  },
  {
    id: 12,
    path: '/pokedex/stat/min/:stat',
    title: 'Sort by Stat — Ascending',
    description: 'Returns all Pokémon sorted from lowest to highest by the specified stat.',
    queryParams: [],
    pathParams: [
      { name: 'stat', type: 'string', required: true, description: 'Stat name: hp · attack · defense · special_attack · special_defense · speed' },
    ],
    statusCodes: [
      { code: 200, label: 'success', description: 'Sorted array of Pokémon' },
      { code: 500, label: 'error', description: 'Invalid stat name' },
    ],
    responseExample: `[
  { "ID": 213, "name": "shuckle", "stats": { "speed": 5  }, ... },
  { "ID": 82,  "name": "magneton", "stats": { "speed": 70 }, ... },
  ...
]`,
    example: `${BASE_URL}/pokedex/stat/min/speed`,
  },
  {
    id: 13,
    path: '/pokedex/stat/max/:stat',
    title: 'Sort by Stat — Descending',
    description: 'Returns all Pokémon sorted from highest to lowest by the specified stat.',
    queryParams: [],
    pathParams: [
      { name: 'stat', type: 'string', required: true, description: 'Stat name: hp · attack · defense · special_attack · special_defense · speed' },
    ],
    statusCodes: [
      { code: 200, label: 'success', description: 'Sorted array of Pokémon' },
      { code: 500, label: 'error', description: 'Invalid stat name' },
    ],
    responseExample: `[
  { "ID": 75,  "name": "graveler",  "stats": { "attack": 95  }, ... },
  { "ID": 68,  "name": "machamp",   "stats": { "attack": 130 }, ... },
  ...
]`,
    example: `${BASE_URL}/pokedex/stat/max/attack`,
  },
  {
    id: 14,
    path: '/pokedex/stat/range/:stat',
    title: 'Filter by Stat Range',
    description: 'Returns all Pokémon whose value for the specified stat is within the given range, sorted ascending. At least one of min or max is required.',
    queryParams: [
      { name: 'min', type: 'number', required: false, description: 'Minimum stat value (at least one of min / max required)' },
      { name: 'max', type: 'number', required: false, description: 'Maximum stat value (at least one of min / max required)' },
    ],
    pathParams: [
      { name: 'stat', type: 'string', required: true, description: 'Stat name: hp · attack · defense · special_attack · special_defense · speed' },
    ],
    statusCodes: [
      { code: 200, label: 'success', description: 'Sorted array of Pokémon' },
      { code: 400, label: 'warning', description: 'Neither min nor max provided' },
      { code: 500, label: 'error', description: 'Invalid stat name' },
    ],
    responseExample: `[
  { "ID": 56,  "name": "mankey",   "stats": { "attack": 80 }, ... },
  { "ID": 66,  "name": "machop",   "stats": { "attack": 80 }, ... },
  { "ID": 216, "name": "teddiursa","stats": { "attack": 80 }, ... },
  ...
]`,
    example: `${BASE_URL}/pokedex/stat/range/attack?min=100&max=150`,
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function ParamsTable({ params, title }) {
  if (!params || params.length === 0) return null
  return (
    <div className="params-section">
      <div className="params-title">{title}</div>
      <table className="params-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {params.map((p, i) => (
            <tr key={i}>
              <td><code className="param-name">{p.name}</code></td>
              <td><span className="param-type">{p.type}</span></td>
              <td>
                <span className={`param-required ${p.required ? 'required' : 'optional'}`}>
                  {p.required ? 'required' : 'optional'}
                </span>
              </td>
              <td className="param-desc">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function StatusCodes({ codes }) {
  return (
    <div className="status-codes">
      <div className="params-title">Responses</div>
      <div className="status-list">
        {codes.map((c, i) => (
          <div key={i} className="status-item">
            <span className={`status-badge ${c.label}`}>{c.code}</span>
            <span className="status-desc">{c.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function EndpointRow({ endpoint }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`endpoint-row ${open ? 'open' : ''}`}>
      <button className="endpoint-trigger" onClick={() => setOpen(!open)}>
        <span className="http-method-badge">GET</span>
        <code className="endpoint-path-text">{endpoint.path}</code>
        <span className="endpoint-summary">{endpoint.title}</span>
        <span className={`endpoint-chevron ${open ? 'up' : ''}`}>▾</span>
      </button>
      {open && (
        <div className="endpoint-details">
          <p className="endpoint-desc-full">{endpoint.description}</p>
          <ParamsTable params={endpoint.pathParams} title="Path Parameters" />
          <ParamsTable params={endpoint.queryParams} title="Query Parameters" />
          <StatusCodes codes={endpoint.statusCodes} />
          <div className="response-block">
            <div className="response-block-header">
              <span className="params-title">Response Example</span>
              <a
                className="response-url-link"
                href={endpoint.example}
                target="_blank"
                rel="noopener noreferrer"
              >
                {endpoint.example}
              </a>
            </div>
            <pre className="response-pre"><code>{endpoint.responseExample}</code></pre>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

function OverviewTab() {
  return (
    <div className="overview-tab">
      <div className="overview-section">
        <h3 className="section-heading">Data Model — Pokemon</h3>
        <p className="section-text">Each document in the collection has the following structure:</p>
        <pre className="response-pre"><code>{`{
  "_id": "6394ccde0444413377f32891",
  "ID": 25,
  "name": "pikachu",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  "first_type": "electric",
  "second_type": null,
  "ability": "static",
  "height": "0.4m",
  "weight": "6kg",
  "stats": {
    "hp": 35,
    "attack": 55,
    "defense": 40,
    "special_attack": 50,
    "special_defense": 50,
    "speed": 90
  }
}`}</code></pre>
      </div>

      <div className="overview-grid">
        <div className="overview-section">
          <h3 className="section-heading">Types</h3>
          <p className="section-text">
            Valid values for <code>first_type</code> and <code>second_type</code>:
          </p>
          <div className="type-badges">
            {VALID_TYPES.map(t => (
              <span key={t} className={`type-badge type-${t}`}>{t}</span>
            ))}
          </div>
        </div>

        <div className="overview-section">
          <h3 className="section-heading">Stats</h3>
          <p className="section-text">Valid values for stat endpoints:</p>
          <div className="tag-list">
            {VALID_STATS.map(s => (
              <code key={s} className="tag-item">{s}</code>
            ))}
          </div>

          <h3 className="section-heading" style={{ marginTop: '1.75rem' }}>Generations</h3>
          <table className="params-table">
            <thead>
              <tr><th>Gen</th><th>ID Range</th></tr>
            </thead>
            <tbody>
              {GENERATIONS.map(g => (
                <tr key={g.gen}>
                  <td><code className="param-name">{g.gen}</code></td>
                  <td className="param-desc">{g.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function EndpointsTab() {
  return (
    <div className="endpoints-tab">
      <div className="endpoint-group-label">Pokédex — 14 endpoints</div>
      <div className="endpoint-group">
        {endpoints.map(ep => (
          <EndpointRow key={ep.id} endpoint={ep} />
        ))}
      </div>
    </div>
  )
}

function ChangelogTab() {
  return (
    <div className="changelog-tab">

      <div className="changelog-version">
        <div className="changelog-version-header">
          <span className="changelog-version-badge">v2.0.0</span>
          <span className="changelog-version-date">2026-03-05</span>
        </div>

        <div className="changelog-section">
          <h4 className="changelog-section-title new">New Endpoints</h4>
          <ul className="changelog-list">
            <li><code>GET /pokedex/types</code> — lists all unique types in the DB</li>
            <li><code>GET /pokedex/abilities</code> — lists all unique abilities in the DB</li>
            <li><code>GET /pokedex/random?count=N</code> — returns N random Pokémon (max 10)</li>
            <li><code>GET /pokedex/dual-type/:first/:second</code> — filters by exact dual type in any order</li>
            <li><code>GET /pokedex/stat/range/:stat?min=&amp;max=</code> — filters by stat value range</li>
          </ul>
        </div>

        <div className="changelog-section">
          <h4 className="changelog-section-title fix">Bug Fixes</h4>
          <ul className="changelog-list">
            <li>Middleware (cors, morgan, express.json) was registered after the router, so it never applied to any request</li>
            <li><code>throw new error</code> (lowercase) in gen and type controllers caused a silent ReferenceError at runtime</li>
            <li><code>/pokedex/type/:type</code> only filtered <code>first_type</code>, ignoring <code>second_type</code> — Pokémon like Charizard did not appear in <code>/type/flying</code></li>
            <li><code>min</code> and <code>max</code> in <code>/pokedex/between</code> were passed as strings to a numeric MongoDB query, producing incorrect results</li>
            <li>Invalid stat in min/max endpoints failed silently without returning an error</li>
            <li>Variables <code>pokes</code> declared without <code>const</code> / <code>let</code> in all controllers (accidental globals)</li>
            <li>Removed deprecated <code>useNewUrlParser</code> and <code>useUnifiedTopology</code> options from the Mongoose connection</li>
          </ul>
        </div>

        <div className="changelog-section">
          <h4 className="changelog-section-title perf">Performance</h4>
          <ul className="changelog-list">
            <li>Pagination on <code>GET /pokedex</code>: no longer returns all documents at once; now accepts <code>page</code> and <code>limit</code> (max 200) and returns metadata <code>&#123; data, total, page, limit, pages &#125;</code></li>
            <li><code>.lean()</code> added to all queries — returns plain JS objects instead of full Mongoose documents</li>
            <li>MongoDB indexes added to the model: <code>ID</code> (unique), <code>name</code>, <code>first_type</code>, <code>second_type</code>, <code>ability</code></li>
          </ul>
        </div>

        <div className="changelog-section">
          <h4 className="changelog-section-title improve">Usability</h4>
          <ul className="changelog-list">
            <li>Name search (<code>/name/:name</code>) is now partial and case-insensitive</li>
            <li>Ability search (<code>/ability/:ability</code>) is now partial and case-insensitive</li>
            <li>Parameter validation with descriptive error messages on all endpoints</li>
          </ul>
        </div>
      </div>

      <div className="changelog-version">
        <div className="changelog-version-header">
          <span className="changelog-version-badge old">v1.0.0</span>
          <span className="changelog-version-date">2024</span>
        </div>
        <div className="changelog-section">
          <h4 className="changelog-section-title">Initial Release</h4>
          <ul className="changelog-list">
            <li>Initial release with 9 basic Pokédex endpoints</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

function ApiDocs() {
  const [activeTab, setActiveTab] = useState('endpoints')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'endpoints', label: 'Endpoints' },
    { id: 'changelog', label: 'Changelog' },
  ]

  return (
    <section className="api-docs">
      <div className="api-header">
        <h2 className="api-title">API Reference</h2>
        <p className="api-subtitle">
          GottaFetchThemAll REST API — 1,010 Pokémon across 9 generations
        </p>
        <div className="api-base-url">
          <span className="base-url-label">Base URL</span>
          <code className="base-url-value">https://gottafetchthemall.onrender.com</code>
        </div>
      </div>

      <div className="api-stats">
        <div className="stat-card">
          <div className="stat-value">1,025</div>
          <div className="stat-label">Total Pokémon</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">14</div>
          <div className="stat-label">Endpoints</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">9</div>
          <div className="stat-label">Generations</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">18</div>
          <div className="stat-label">Types</div>
        </div>
      </div>

      <div className="api-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="api-content">
        {activeTab === 'overview'  && <OverviewTab />}
        {activeTab === 'endpoints' && <EndpointsTab />}
        {activeTab === 'changelog' && <ChangelogTab />}
      </div>

      <div className="api-footer">
        <div className="footer-content">
          <h3>Start fetching</h3>
          <p>All endpoints return JSON and support CORS.</p>
          <div className="footer-links">
            <a href="https://github.com/Remojs/GottaFetchThemAll-API" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
            <a href="https://gottafetchthemall.onrender.com" target="_blank" rel="noopener noreferrer">
              Live API
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApiDocs
