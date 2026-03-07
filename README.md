# Gotta Fetch Them All - Landing Page

<div align="center">
  <img src="public/GCTA.png" alt="Gotta Fetch Them All Logo" width="120" height="120">
  
  **Una landing page moderna y para la API de Pokémon más completa**
  
  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![Axios](https://img.shields.io/badge/Axios-1.4.0-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

  [Demo en Vivo](https://gottafetchthemall-landing.vercel.app) • [API Documentation](https://gottafetchthemall.onrender.com/) • [API Repository](https://github.com/Remojs/GottaFetchThemAll-API)
</div>

## Objetivo del Proyecto

**Gotta Fetch Them All** es una landing page interactiva diseñada para mostrar las capacidades de la API RESTful de Pokémon más completa disponible. El proyecto combina un diseño moderno con estética cyberpunk, proporcionando una experiencia visual impactante mientras demuestra la funcionalidad de la API.

### Características Principales

- **Diseño Cyberpunk**: Gradientes vibrantes rojos con efectos de grid difuminado
- **Totalmente Responsivo**: Adaptado para todos los dispositivos
- **Carga Rápida**: Construido con Vite para máximo rendimiento
- **Datos en Tiempo Real**: Integración directa con la API de Pokémon
- **Efectos Visuales**: Animaciones fluidas y transiciones suaves
- **SEO Optimizado**: Estructura semántica y metadatos apropiados

## Tecnologías Utilizadas

### Frontend Core
- **React 18.2.0** - Biblioteca principal para la UI
- **Vite 6.3.5** - Herramienta de build ultrarrápida
- **CSS3 Moderno** - Animaciones, gradientes y efectos visuales
- **JavaScript ES6+** - Funcionalidades modernas del lenguaje

### Herramientas y Librerías
- **Axios 1.4.0** - Cliente HTTP para consumir la API
- **ESLint** - Linting y calidad de código
- **Google Fonts (Quicksand)** - Tipografía moderna y legible

### Diseño y UX
- **Glassmorphism** - Efectos de cristal y transparencias
- **Grid Cyberpunk** - Patrones de fondo futuristas
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Transiciones CSS suaves

## Estructura del Proyecto

```
gfta-landing/
├── public/
│   ├── GCTA.png                 # Logo principal
│   ├── github-svgrepo-com.svg   # Icono GitHub
│   ├── linkedin-svgrepo-com.svg # Icono LinkedIn
│   ├── twitter-svgrepo-com.svg  # Icono Twitter
│   └── vite.svg                 # Icono Vite
├── src/
│   ├── components/
│   │   ├── ApiDocs.jsx          # Documentación de la API
│   │   ├── ApiDocs.css          # Estilos para documentación
│   │   ├── MainLayout.jsx       # Layout principal
│   │   ├── MainLayout.css       # Estilos del layout
│   │   ├── Navbar.jsx           # Barra de navegación
│   │   ├── Navbar.css           # Estilos del navbar
│   │   ├── PokemonGrid.jsx      # Grid de Pokémon
│   │   └── PokemonGrid.css      # Estilos del grid
│   ├── App.jsx                  # Componente principal
│   ├── App.css                  # Estilos de la app
│   ├── index.css                # Estilos globales
│   └── main.jsx                 # Punto de entrada
├── index.html                   # HTML principal
├── package.json                 # Dependencias y scripts
├── vite.config.js              # Configuración de Vite
└── README.md                   # Este archivo
```


## API Documentation

Base URL: `https://gottafetchthemall.onrender.com`

### Data Model — Pokemon

Each document in the collection has the following structure:

```json
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
  "stats": {
    "hp": 35,
    "attack": 55,
    "defense": 40,
    "special_attack": 50,
    "special_defense": 50,
    "speed": 90
  }
}
```

### Valid Values

**Types** (`first_type` / `second_type`)

```
normal  fire  water  grass  flying  fighting  poison  electric
ground  rock  psychic  ice  bug  ghost  steel  dragon  dark  fairy
```

**Stats** — `hp` · `attack` · `defense` · `special_attack` · `special_defense` · `speed`

**Generations** — 1 (1–151) · 2 (152–251) · 3 (252–386) · 4 (387–494) · 5 (495–649) · 6 (650–721) · 7 (722–809) · 8 (810–905) · 9 (906–1010)

### Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/pokedex` | All Pokémon — paginated, filterable by `first_type`, `second_type`, `ability` |
| GET | `/pokedex/between?min=&max=` | By Pokédex ID range |
| GET | `/pokedex/random?count=` | Random Pokémon (max 10) |
| GET | `/pokedex/types` | List of all unique types |
| GET | `/pokedex/abilities` | List of all unique abilities |
| GET | `/pokedex/gen/:gen` | By generation (1–9) |
| GET | `/pokedex/name/:name` | By name — partial, case-insensitive |
| GET | `/pokedex/number/:id` | By Pokédex number |
| GET | `/pokedex/type/:type` | By type (first or second) |
| GET | `/pokedex/dual-type/:first/:second` | By exact dual type |
| GET | `/pokedex/ability/:ability` | By ability — partial, case-insensitive |
| GET | `/pokedex/stat/min/:stat` | Sorted by stat ascending |
| GET | `/pokedex/stat/max/:stat` | Sorted by stat descending |
| GET | `/pokedex/stat/range/:stat?min=&max=` | By stat value range |

### Pagination — `GET /pokedex`

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `page` | number | No | Page number (default: 1) |
| `limit` | number | No | Results per page, max 200 (default: 100) |
| `first_type` | string | No | Filter by primary type |
| `second_type` | string | No | Filter by secondary type |
| `ability` | string | No | Filter by exact ability |

Response:

```json
{ "data": [...], "total": 1010, "page": 1, "limit": 100, "pages": 11 }
```

### Changelog

**v2.0.0 — 2026-03-05**

New endpoints: `GET /pokedex/types`, `GET /pokedex/abilities`, `GET /pokedex/random`, `GET /pokedex/dual-type/:first/:second`, `GET /pokedex/stat/range/:stat`

Bug fixes: middleware registration order; silent ReferenceError in gen/type controllers; `/type/:type` ignored `second_type`; `between` min/max passed as strings to MongoDB numeric query; invalid stat failed silently; accidental global variables; removed deprecated Mongoose options.

Performance: pagination on `GET /pokedex`; `.lean()` on all queries; MongoDB indexes on `ID`, `name`, `first_type`, `second_type`, `ability`.

Usability: partial case-insensitive search on `/name/:name` and `/ability/:ability`; descriptive parameter validation errors.

**v1.0.0 — 2024**

Initial release with 9 basic Pokédex endpoints.

---

**Gotta Fetch Them All!**
