const recolorAnimated = {
  id: "recolor_animated",
  name: "recolor_animated",
  description: "Creates an animated recolor of an image with multiple colors",
  category: "color",
  usage: "/recolor_animated <colors> <intensity> [change_effect] [speed] [target] [image]",
  arguments: [
    {
      name: "colors",
      description: "List of HEX color codes, separated by spaces or commas (min 2, max 10)",
      required: true,
    },
    {
      name: "intensity",
      description: "Intensity of recoloring (0-100)",
      required: true,
    },
    {
      name: "change_effect",
      description: "Transition effect between colors (0=hard, 100=continuous)",
      required: false,
    },
    {
      name: "speed",
      description: "How many times there is a color change per minute (min 2, max 10), default: 30",
      required: false,
    },
    {
      name: "target",
      description: "Apply recolor to image or background, default: Image",
      required: false,
    },
    {
      name: "image",
      description: "Image to recolor, default: your first uploaded image",
      required: false,
    },
  ],
  instructions: null,
  videoUrl: null,
};

export default recolorAnimated;
