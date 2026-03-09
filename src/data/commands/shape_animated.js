const shapeAnimated = {
  id: "shape_animated",
  name: "shape_animated",
  description: "Creates an animated shape-based gradient color to an image",
  category: "color",
  usage: "/shape_animated <colors> <colors_per_gradient> <intensity> <shape> <direction> [speed] [target] [frame_mode] [image]",
  arguments: [
    {
      name: "colors",
      description: "List of HEX color codes, separated by spaces or commas (min 2, max 10)",
      required: true,
    },
    {
      name: "colors_per_gradient",
      description: "How many colors are visible at once (2-10)",
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
      name: "direction",
      description: "Gradient direction (inside to outside or reverse)",
      required: true,
    },
    {
      name: "speed",
      description: "How many times the gradient cycles per minute (min 1, max 90), default: 30",
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

export default shapeAnimated;
