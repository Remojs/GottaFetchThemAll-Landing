# 🔥 Gotta Fetch Them All - Landing Page

<div align="center">
  <img src="public/GCTA.png" alt="Gotta Fetch Them All Logo" width="120" height="120">
  
  **Una landing page moderna y cyberpunk para la API de Pokémon más completa**
  
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

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 16.0+ 
- npm 8.0+ o yarn 1.22+

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Remojs/GottaFetchThemAll-Landing.git
   cd GottaFetchThemAll-Landing
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   # o
   yarn build
   ```

5. **Previsualizar build de producción**
   ```bash
   npm run preview
   # o
   yarn preview
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

## 🎨 Características de Diseño

### Paleta de Colores
- **Gradiente Principal**: `#ff1744` → `#d50000` → `#ff5722` → `#e53935` → `#c62828`
- **Acentos Cyberpunk**: Cyan (`#00ffff`) y Magenta (`#ff00ff`)
- **Neutros**: Blancos con transparencias y negros profundos

### Efectos Visuales
- **Grid Cyberpunk**: Patrones de líneas con efectos de difuminado
- **Glassmorphism**: Transparencias con backdrop-filter
- **Shadows & Glows**: Sombras suaves y brillos neón
- **Smooth Transitions**: Animaciones de 0.3s con easing

### Responsive Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🚀 Funcionalidades

### 🎲 Grid de Pokémon Aleatorio
- Muestra 8 Pokémon aleatorios en un grid 4x2
- Botón de "Refresh Collection" para obtener nuevos Pokémon
- Cards con efectos hover y información detallada
- Enlaces directos a la API para cada Pokémon

### 📖 Documentación Interactiva
- Sección completa con todos los endpoints
- Ejemplos clickeables para cada endpoint
- Estadísticas en tiempo real de la API
- Cards con efectos visuales modernos

### 🧭 Navegación Optimizada
- Navbar fijo con efecto glassmorphism
- Responsive con título oculto en mobile
- Botones con gradientes y efectos hover
- Enlaces a repositorio y documentación

### 🔗 Footer Social
- Enlaces a perfiles sociales del desarrollador
- Iconos con efectos hover animados
- Diseño minimalista y elegante

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta el linter para revisar el código

## 🐛 Reportar Issues

Si encuentras algún problema o tienes una sugerencia, por favor [crea un issue](https://github.com/Remojs/GottaFetchThemAll-Landing/issues) con la siguiente información:

- Descripción del problema
- Pasos para reproducirlo
- Comportamiento esperado vs. actual
- Screenshots (si aplica)
- Información del navegador/dispositivo

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Thiago Zambonini (Remojs)**

- 🌐 [GitHub](https://github.com/Remojs)
- 💼 [LinkedIn](https://www.linkedin.com/in/thiago-zambonini-2a279a239/)
- 🐦 [Twitter](https://twitter.com/Remocodee)

---

<div align="center">
  <p>⭐ Si te gustó este proyecto, ¡no olvides darle una estrella! ⭐</p>
  <p>🔥 <strong>¡Gotta Fetch Them All!</strong> 🔥</p>
</div>
