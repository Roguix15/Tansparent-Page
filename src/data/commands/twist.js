const twist = {
  id: "twist",
  name: "twist",
  description: "Produces an image continuously flipping in 3D",
  category: "animations",
  usage: "/twist <flips_per_minute> <direction> <expand> [background] [image]",
  arguments: [
    {
      name: "flips_per_minute",
      description: "Laps per minute (min 2, max 90)",
      required: true,
    },
    {
      name: "direction",
      description: "Direction of twist",
      required: true,
    },
    {
      name: "expand",
      description: "Expand frame while twisting?",
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

export default twist;
