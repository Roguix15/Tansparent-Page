const zoom = {
  id: "zoom",
  name: "zoom",
  description: "Creates an animated resize (zoom in/out) effect",
  category: "animations",
  usage: "/zoom <resizes_per_minute> <min_width> <min_height> <max_width> <max_height> <anchor> [background] [image]",
  arguments: [
    {
      name: "resizes_per_minute",
      description: "Changes per minute (min 2, max 90)",
      required: true,
    },
    {
      name: "min_width",
      description: "Minimum width in pixels (min 5, max 3000)",
      required: true,
    },
    {
      name: "min_height",
      description: "Minimum height in pixels (min 5, max 3000)",
      required: true,
    },
    {
      name: "max_width",
      description: "Maximum canvas width in pixels (min 5, max 3000)",
      required: true,
    },
    {
      name: "max_height",
      description: "Maximum canvas height in pixels (min 5, max 3000)",
      required: true,
    },
    {
      name: "anchor",
      description: "Where the image expands from",
      required: true,
    },
    {
      name: "background",
      description: "Background color (HEX) or 'uploaded' for your second uploaded image, default: transparent",
      required: false,
    },
    {
      name: "image",
      description: "Image to animate, default: your first uploaded image",
      required: false,
    },
  ],
  instructions: null,
  videoUrl: null,
};

export default zoom;
