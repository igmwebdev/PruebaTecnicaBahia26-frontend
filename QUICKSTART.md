# Quick Start

## Requisitos

- Node.js 20.19+
- npm o yarn

## Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/igmwebdev/PruebaTecnicaBahia26-frontend.git
cd PruebaTecnicaBahia26-frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Asegúrate que el backend está corriendo

El backend debe estar accesible en `http://localhost:8080`

### 4. Iniciar el servidor de desarrollo

```bash
npm start
```

La aplicación se abrirá automáticamente en `http://localhost:4200`

## Comandos Disponibles

```bash
npm start        # Inicia el servidor de desarrollo
npm run build    # Build para producción
npm test         # Ejecuta los tests
```

## Configuración de la API

Si necesitas cambiar la URL de la API, edita el archivo:

```
src/environments/environment.ts
```

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'  // Cambia aquí si es necesario
};
```

## Documentación Completa

Consulta [README.md](./README.md) para más detalles.
