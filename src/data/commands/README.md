# Guía de Comandos

## Estructura de un Comando

Cada comando debe seguir esta estructura:

```javascript
const commandName = {
  id: "command-id",              // ID único del comando
  name: "commandname",            // Nombre del comando (sin /)
  description: "Brief description", // Descripción corta
  category: "category-name",      // Categoría del comando
  usage: "/command <arg> [opt]",  // Cómo usar el comando
  arguments: [                    // Array de argumentos (null si no tiene)
    {
      name: "argName",
      description: "What this argument does",
      required: true/false,
    }
  ],
  instructions: "Step by step...", // Instrucciones adicionales (null si no necesita)
  videoUrl: "https://youtube...",  // URL del tutorial (null si no tiene)
};

export default commandName;
```

## Categorías Disponibles

### Categorías Principales (se muestran en Home y Commands):
- `color` - Modificación de colores
- `adjustments_effects` - Ajustes y efectos visuales
- `transformations` - Transformaciones de imagen
- `animations` - Creación de animaciones y GIFs
- `text_overlay` - Texto y capas sobre imágenes
- `utilities` - Herramientas y utilidades

### Categorías Secundarias (solo en Commands):
- `settings` - Configuración del bot
- `information` - Información y ayuda

## Colores por Categoría

- `color`: Naranja/Rojo
- `adjustments_effects`: Púrpura/Rosa
- `transformations`: Azul/Cyan
- `animations`: Rosa/Rose
- `text_overlay`: Verde/Esmeralda
- `utilities`: Cyan/Azul
- `settings`: Gris
- `information`: Slate

## Ejemplos

### Comando Simple (sin argumentos)
```javascript
const ping = {
  id: "ping",
  name: "ping",
  description: "Check bot latency",
  category: "information",
  usage: "/ping",
  arguments: null,
  instructions: null,
  videoUrl: null,
};
```

### Comando con Argumentos
```javascript
const flip = {
  id: "flip",
  name: "flip",
  description: "Flip an image horizontally, vertically, or both",
  category: "transformations",
  usage: "/flip <mode> [image]",
  arguments: [
    {
      name: "mode",
      description: "Flip mode: horizontal, vertical, or both",
      required: true,
    },
    {
      name: "image",
      description: "Image to flip, default: your first uploaded image",
      required: false,
    },
  ],
  instructions: null,
  videoUrl: null,
};
```

### Comando Completo (con todo)
```javascript
const complexCommand = {
  id: "complex",
  name: "complex",
  description: "A complex command with all features",
  category: "adjustments_effects",
  usage: "/complex <param1> <param2> [optional]",
  arguments: [
    {
      name: "param1",
      description: "First required parameter",
      required: true,
    },
    {
      name: "param2",
      description: "Second required parameter",
      required: true,
    },
    {
      name: "optional",
      description: "Optional parameter, default: auto",
      required: false,
    },
  ],
  instructions: "1. Run the command\n2. Wait for the result\n3. Click the button to apply changes",
  videoUrl: "https://youtube.com/watch?v=example",
};
```

## Cómo Agregar un Nuevo Comando

1. Crea un nuevo archivo en `src/data/commands/` con el nombre del comando
2. Exporta el objeto del comando siguiendo la estructura
3. Importa y agrega el comando en `src/data/commands/index.js`
4. Organiza los comandos por categoría en el array de exportación

## Notas Importantes

- Si un campo es `null`, no se mostrará en la UI
- Los argumentos opcionales deben ir entre `[]` en el usage
- Los argumentos requeridos deben ir entre `<>` en el usage
- El botón de video solo aparece si `videoUrl` no es null
- Las instrucciones solo se muestran si no son null
- La mayoría de comandos de edición usan la imagen subida por defecto
- Para valores por defecto, usa el formato: "descripción, default: valor" (con coma y espacio)
