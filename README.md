# Pokémon App

Esta aplicación web construida con Angular permite a los usuarios buscar información sobre Pokémon utilizando un ID o nombre.

## Características

- 🔍 Búsqueda de Pokémon por ID o nombre
- 📋 Visualización detallada de información del Pokémon
- 🖼️ Muestra de imágenes de los Pokémon
- ⬅️➡️ Navegación entre Pokémon mediante paginación
- 📱 Diseño adaptable a diferentes dispositivos

## Tecnologías utilizadas

- Angular 15.2.11
- TypeScript
- SCSS
- RxJS
- Angular CLI

## Estructura del proyecto

El proyecto sigue una arquitectura limpia, organizada de la siguiente manera:

```
src/
├── app/
│   ├── core/              # Servicios singleton, models, interceptors
│   ├── features/          # Módulos de características (Pokemon)
│   ├── shared/            # Componentes, pipes, directivas compartidas
│   └── app.component.*    # Componente raíz
├── assets/
└── environments/          # Configuraciones de entorno
```

## Requisitos previos

- Node.js (v14 o superior)
- npm (v6 o superior)
- Angular CLI (`npm install -g @angular/cli@15.2.11`)

## Instalación y ejecución

### Desarrollo local

1. Clone el repositorio:
   ```bash
   git clone https://github.com/javiezapata/pokemon-app.git
   cd pokemon-app
   ```

2. Instale las dependencias:
   ```bash
   npm install
   ```

3. Ejecute el servidor de desarrollo:
   ```bash
   npm start
   ```

4. Acceda a la aplicación en su navegador:
   ```
   http://localhost:4200
   ```

### Producción

Para generar los archivos de producción:

```bash
npm run build
```

Los archivos estarán disponibles en la carpeta `dist/pokemon-app/`.

## Despliegue en Render

1. Cree una cuenta en [Render](https://render.com/)
2. Haga clic en "New +" y seleccione "Static Site"
3. Conecte su repositorio Git
4. Configure los siguientes ajustes:
   - **Name**: `pokemon-app` (o el nombre deseado)
   - **Branch**: `main` (o la rama que desee desplegar)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist/pokemon-app`
5. Haga clic en "Create Static Site"
6. La aplicación estará disponible en una URL como `https://pokemon-app.onrender.com`

## Pruebas

Para ejecutar las pruebas unitarias:

```bash
ng test
```

## API

La aplicación consume los siguientes endpoints:

- `GET http://localhost:3000/pokemon/:id` - Buscar Pokémon por ID
- `GET http://localhost:3000/pokemon/:name` - Buscar Pokémon por nombre

El formato de respuesta es:

```json
{
  "id": 25,
  "name": "pikachu",
  "types": ["electric"],
  "abilities": ["static", "lightning-rod"],
  "sprite_url": "https://.../pikachu.png"
}
```

## Funcionalidades principales

### Componente de búsqueda

Permite al usuario buscar Pokémon por:
- ID numérico
- Nombre

### Componente de detalles

Muestra información detallada del Pokémon:
- Imagen
- Tipos
- Habilidades

### Paginación

Permite navegar entre Pokémon con:
- Botón "Anterior" (deshabilitado si es el primer Pokémon)
- Botón "Siguiente"

## Estilizado

La aplicación utiliza SCSS para los estilos, con:
- Variables para colores y dimensiones
- Estilos responsivos
- Manejo de estados visuales (hover, disabled, etc.)

## Autor

Javier Zapata Montoya
