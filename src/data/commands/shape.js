const shape = {
  id: "shape",
  name: "shape",
  description: "Applies a shape-based gradient",
  category: "color",
  usage: "/shape <colors> <intensity> <shape> [blend_mode] [target] [frame_mode] [image]",
  arguments: [
    {
      name: "colors",
      description: "List of HEX color codes, separated by spaces or commas (min 2, max 10)",
      required: true,
    },
    {
      name: "intensity",
      description: "Intensity of gradient (0-100)",
      required: true,
    },
    {
      name: "shape",
      description: "Shape of the gradient",
      required: true,
    },
    {
      name: "blend_mode",
      description: "Color blending mode, default: Normal",
      required: false,
    },
    {
      name: "target",
      description: "Apply gradient to image or background, default: Image",
      required: false,
    },
    {
      name: "frame_mode",
      description: "Where to calculate the gradient, default: Visible",
      required: false,
    },
    {
      name: "image",
      description: "Image to shape, default: your first uploaded image",
      required: false,
    },
  ],
  instructions: null,
  videoUrl: null,
};

export default shape;
