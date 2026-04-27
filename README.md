# PruebaTecnicaBahia26-frontend

Frontend Angular 20 para gestionar pedidos consumiendo una API REST.

**Repositorio frontend:** [PruebaTecnicaBahia26-frontend](https://github.com/igmwebdev/PruebaTecnicaBahia26-frontend)

## Características

- ✅ Listado de pedidos con filtrado por estado
- ✅ Formulario para crear nuevos pedidos
- ✅ Validación de formularios con formularios reactivos
- ✅ Ejecución manual del batch de procesamiento
- ✅ Manejo de errores básico
- ✅ Diseño responsive (desktop y móvil)
- ✅ Interfaz clara y profesional

## Requisitos Previos

- Node.js 20+
- npm o yarn
- Angular CLI 20

## Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

## Configuración

La URL base de la API está configurada en:
- Desarrollo: `src/environments/environment.ts`
- Producción: `src/environments/environment.prod.ts`

Valor actual: `http://localhost:8080`

Para cambiar la URL de la API, edita el archivo correspondiente:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};
```

## Ejecución

### Desarrollo

```bash
npm start
```

La aplicación se abrirá automáticamente en `http://localhost:4200`

### Build para Producción

```bash
npm run build
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── order-form/        # Formulario para crear pedidos
│   │   └── order-list/        # Listado de pedidos
│   ├── models/
│   │   └── order.model.ts     # Interfaces y tipos
│   ├── services/
│   │   └── order.service.ts   # Servicio para API
│   ├── app.component.*        # Componente raíz
│── environments/              # Configuración por ambiente
├── index.html
├── main.ts
└── styles.scss
```

## Modelos de Datos

### Order
```typescript
{
  id: number;
  customerName: string;
  product: string;
  quantity: number;
  status: 'NEW' | 'PROCESSED' | 'FAILED';
  createdAt: string;
}
```

### CreateOrderRequest
```typescript
{
  customerName: string;
  product: string;
  quantity: number;
}
```

## API Endpoints

### Listar Pedidos
- `GET /api/orders` - Todos los pedidos
- `GET /api/orders?status=NEW` - Pedidos nuevos
- `GET /api/orders?status=PROCESSED` - Pedidos procesados
- `GET /api/orders?status=FAILED` - Pedidos fallidos

### Crear Pedido
- `POST /api/orders`
  - Body: `CreateOrderRequest`

### Ejecutar Batch
- `POST /api/batch/orders/process`

## Características Implementadas

- ✅ Listado de pedidos
- ✅ Filtro por estado (Todos, Nuevo, Procesado, Fallido)
- ✅ Formulario reactivo para crear pedidos
- ✅ Validaciones de formulario
- ✅ Botón para ejecutar batch manualmente
- ✅ Refrescado automático del listado
- ✅ Mensajes de éxito/error
- ✅ Indicadores visuales por estado
- ✅ Loading states
- ✅ Responsive design
- ✅ Sin librerías innecesarias

## Notas

- El formulario de creación utiliza Reactive Forms y el filtro de estado utiliza `ngModel`
- La aplicación utiliza standalone components de Angular 20
- El diseño es limpio y profesional, sin complicaciones innecesarias
- Compatible con desktop y dispositivos móviles
- No se utilizan librerías de UI de terceros para mantener simplificidad

## Backend Relacionado

Este proyecto consume la API del backend de la prueba técnica. El backend debe estar corriendo en `http://localhost:8080`.

**Repositorio backend:** [PruebaTecnicaBahia26-backend](https://github.com/igmwebdev/PruebaTecnicaBahia26-backend)

## Supuestos

1. La API está corriendo en `http://localhost:8080`
2. El backend permite peticiones CORS desde `http://localhost:4200`
3. Los formatos de fecha siguen el estándar ISO 8601

## Desarrollo

Para realizar cambios en los componentes o servicios:

1. Editar los archivos en `src/app/`
2. Los cambios se reflejarán automáticamente en el navegador (con `npm start`)
3. Para ver errores de compilación, revisar la consola del navegador y la terminal

## Tests

```bash
npm test
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios propuestos.

## Licencia

MIT - Prueba Técnica 2026
