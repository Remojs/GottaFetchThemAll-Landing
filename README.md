# 🔥 Gotta Fetch Them All - Landing Page

<div align="center">
  <img src="public/GCTA.png" alt="Gotta Fetch Them All Logo" width="120" height="120">
  
  **Una landing page moderna y para la API de Pokémon más completa**
  
  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![Axios](https://img.shields.io/badge/Axios-1.4.0-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

  [🌐 Demo en Vivo](https://gottafetchthemall-landing.vercel.app) • [📚 API Documentation](https://gottafetchthemall.onrender.com/) • [🔗 API Repository](https://github.com/Remojs/GottaFetchThemAll-API)
</div>

## 🎯 Objetivo del Proyecto

**Gotta Fetch Them All** es una landing page interactiva diseñada para mostrar las capacidades de la API RESTful de Pokémon más completa disponible. El proyecto combina un diseño moderno con estética cyberpunk, proporcionando una experiencia visual impactante mientras demuestra la funcionalidad de la API.

### ✨ Características Principales

- 🎨 **Diseño Cyberpunk**: Gradientes vibrantes rojos con efectos de grid difuminado
- 📱 **Totalmente Responsivo**: Adaptado para todos los dispositivos
- ⚡ **Carga Rápida**: Construido con Vite para máximo rendimiento
- 🔄 **Datos en Tiempo Real**: Integración directa con la API de Pokémon
- 🎭 **Efectos Visuales**: Animaciones fluidas y transiciones suaves
- 🌐 **SEO Optimizado**: Estructura semántica y metadatos apropiados

## 🚀 Tecnologías Utilizadas

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

## 📁 Estructura del Proyecto

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


## 📚 API Documentation

La landing page consume la **Gotta Fetch Them All API**, una API RESTful completa con los siguientes endpoints:

### 🔗 Endpoints Principales

| Método | Endpoint | Descripción | Ejemplo |
|--------|----------|-------------|---------|
| GET | `/pokedex` | Obtener todos los Pokémon | [Ver ejemplo](https://gottafetchthemall.onrender.com/pokedex) |
| GET | `/pokedex/number/{id}` | Obtener Pokémon por ID | [Ver ejemplo](https://gottafetchthemall.onrender.com/pokedex/number/25) |
| GET | `/pokedex/name/{name}` | Buscar Pokémon por nombre | [Ver ejemplo](https://gottafetchthemall.onrender.com/pokedex/name/pikachu) |
| GET | `/pokedex/type/{type}` | Obtener Pokémon por tipo | [Ver ejemplo](https://gottafetchthemall.onrender.com/pokedex/type/electric) |
| GET | `/pokedex/ability/{ability}` | Buscar por habilidad | [Ver ejemplo](https://gottafetchthemall.onrender.com/pokedex/ability/static) |
| GET | `/pokedex/generation/{gen}` | Filtrar por generación | [Ver ejemplo](https://gottafetchthemall.onrender.com/pokedex/generation/1) |

### 📊 Estadísticas de la API

- **1,010** Pokémon totales
- **298** Habilidades únicas
- **9** Generaciones disponibles
- **18** Tipos diferentes

### 🔧 Características de la API

- ✅ **CORS habilitado** para aplicaciones web
- ✅ **Respuestas en JSON** estructuradas
- ✅ **Sin límite de requests**
- ✅ **Datos actualizados** hasta la 9ª generación
- ✅ **Endpoints RESTful** intuitivos

---

<div align="center">
  <p>⭐ Si te gustó este proyecto, ¡no olvides darle una estrella! ⭐</p>
  <p>🔥 <strong>¡Gotta Fetch Them All!</strong> 🔥</p>
</div>
