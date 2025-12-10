# Gif App - Proyecto de Aprendizaje React + TypeScript - curso "react de cero a experto, Fernando Herrera"

Una aplicación para buscar GIFs que me ayudó a aprender conceptos de primeros conceptos sobre hooks, manejo de peticiones HTTP en react, TypeScript y mucho más.

## 🚀 Lo Que Aprendí

- **React Hooks**: useState, useRef, useEffect y custom hooks
- **TypeScript**: Interfaces, tipado estricto y configuración con Vite
- **HTTP & APIs**: Axios, cache, manejo de errores y variables de entorno
- **Performance**: Debouncing, cache en memoria y optimización de re-renders
- **Herramientas**: ESLint + Prettier, configuración de VS Code

## ⚙️ Configuración Rápida

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar API Key

Crea `.env` en la raíz:

```env
VITE_GIPHY_API_KEY=tu_api_key_de_giphy
```

**Obtener API Key:**

1. Ve a [Giphy Developers](https://developers.giphy.com/)
2. Regístrate y crea una app
3. Copia la API Key

### 3. Ejecutar

```bash
npm run dev
```

## 📁 Estructura de directorios

```
src/
├── gif/
│   ├── actions/    # Peticiones HTTP
│   ├── hooks/      # Custom hooks
│   └── interfaces/ # Tipos TypeScript
└── shared/         # Componentes reutilizables
```

## 🎯 Funcionalidades

- ✅ Búsqueda de GIFs con debounce
- ✅ Cache inteligente (evita peticiones duplicadas, revisar ambas opciones de implementación)
- ✅ Historial de últimas 4 búsquedas
- ✅ Diseño responsive con Tailwind CSS (probablemente haya errores, el foco no esta ahi, si gustan cambiarlo seria genial)

## 🛠️ Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run lint:fix # Arreglar código automáticamente
npm run format   # Formatear con Prettier
```

---

**Proyecto que me ayudo a seguir avanzando en mi aprendisaje de React y TypeScript. 🚀**
