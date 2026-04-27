# Configuración Inicial

## Problema Común en Windows (PowerShell)

Si experimentas errores de permisos de ejecución, prueba una de estas soluciones:

### Opción 1: Usar Command Prompt (CMD) en lugar de PowerShell

1. Abre Command Prompt
2. Navega al proyecto:
   ```cmd
   cd c:\PruebaBahia26Frontend
   ```
3. Instala las dependencias:
   ```cmd
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```cmd
   npm start
   ```

### Opción 2: Usar Git Bash

1. Abre Git Bash
2. Navega al proyecto:
   ```bash
   cd /c/PruebaBahia26Frontend
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

### Opción 3: Ejecutar PowerShell como Administrador

1. Click derecho en PowerShell
2. Selecciona "Run as Administrator"
3. Navega al proyecto:
   ```powershell
   cd c:\PruebaBahia26Frontend
   ```
4. Instala las dependencias:
   ```powershell
   npm install
   ```
5. Inicia el servidor de desarrollo:
   ```powershell
   npm start
   ```

## Instalación en Linux/macOS

```bash
cd c/PruebaBahia26Frontend
npm install
npm start
```

## Verificar que Node.js está instalado

```bash
node --version
npm --version
```

Debe tener Node.js 20.19 o superior.

## Troubleshooting

- **Puerto 4200 en uso:** Si el puerto 4200 está en uso, Angular te ofrecerá usar otro puerto
- **Errores de caché:** Elimina `node_modules` y `package-lock.json`, luego ejecuta `npm install` de nuevo
- **Errores TypeScript:** Asegúrate de tener la versión correcta de TypeScript instalada con las dependencias del proyecto (`typescript ~5.9.0`). Normalmente basta con ejecutar `npm install`.
