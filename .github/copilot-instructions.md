<!-- Instrucciones personalizadas para Copilot en este repositorio -->

# PruebaTecnicaBahia26-frontend - Instrucciones para Copilot

## Contexto del Proyecto

Este es un frontend Angular 20 para gestión de pedidos que consume una API REST en `http://localhost:8080`.

## Stack Técnico

- **Framework:** Angular 20
- **Lenguaje:** TypeScript
- **Testing:** Jasmine/Karma
- **Estilos:** SCSS
- **Formas:** Reactive Forms

## Principios de Desarrollo

- **Simplicidad:** Sin librerías UI innecesarias
- **Mantenibilidad:** Código limpio y bien estructurado
- **Separación de responsabilidades:** Componentes, servicios y modelos bien definidos
- **Responsive:** Diseño mobile-first

## Estructura del Proyecto

```
src/app/
├── components/
│   ├── order-form/      # Formulario reactivo para crear pedidos
│   └── order-list/      # Listado y filtrado de pedidos
├── services/
│   └── order.service.ts # Servicios HTTP para la API
├── models/
│   └── order.model.ts   # Interfaces TypeScript
└── app.component.*      # Componente raíz
```

## Reglas de Código

1. **Componentes:** Usar standalone components cuando sea posible
2. **Formas:** Reactive Forms obligatoriamente
3. **Inyección:** Usar constructor injection con `inject()`
4. **Tipado:** Strict mode activado en TypeScript
5. **Tests:** Escribir tests para servicios y componentes lógicos

## Comandos Importantes

```bash
npm install      # Instalar dependencias
npm start        # Iniciar servidor de desarrollo
npm run build    # Build para producción
npm test         # Ejecutar tests
npm run lint     # Linting (si está configurado)
```

## Endpoints de la API

- `GET /api/orders` - Listar pedidos
- `GET /api/orders?status=NEW|PROCESSED|FAILED` - Filtrar por estado
- `POST /api/orders` - Crear nuevo pedido
- `POST /api/batch/orders/process` - Ejecutar batch manualmente

## Cuando Ayudes

- Mantén la arquitectura existente
- Asegúrate de que el código sea TypeScript puro
- Escribe tests para cambios en servicios
- Actualiza documentación si cambia la estructura
- Respeta los estilos SCSS existentes
