const recolor = {
  id: "recolor",
  name: "recolor",
  description: "Changes the color of an image",
  category: "color",
  usage: "/recolor <color> <intensity> [blend_mode] [target] [image]",
  arguments: [
    {
      name: "color",
      description: "HEX color code",
      required: true,
    },
    {
      name: "intensity",
      description: "Intensity of recoloring (0-100)",
      required: true,
    },
    {
      name: "blend_mode",
      description: "Color blending mode, default: Normal",
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

export default recolor;
