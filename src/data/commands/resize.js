const resize = {
  id: "resize",
  name: "resize",
  description: "Resize an image to the specified width and height",
  category: "transformations",
  usage: "/resize <width> <height> [image]",
  arguments: [
    {
      name: "width",
      description: "New width in pixels",
      required: true,
    },
    {
      name: "height",
      description: "New height in pixels",
      required: true,
    },
    {
      name: "image",
      description: "Image to resize, default: your first uploaded image",
      required: false,
    },
  ],
  instructions: null,
  videoUrl: null,
};

export default resize;
