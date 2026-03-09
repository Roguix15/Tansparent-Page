const spin = {
  id: "spin",
  name: "spin",
  description: "Makes an animation in which the image rotates on itself",
  category: "animations",
  usage: "/spin <revolutions_per_minute> <direction> <expand> [background] [image]",
  arguments: [
    {
      name: "revolutions_per_minute",
      description: "Turns per minute (min 2, max 90)",
      required: true,
    },
    {
      name: "direction",
      description: "Direction of rotation",
      required: true,
    },
    {
      name: "expand",
      description: "Expand frame while spinning?",
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

export default spin;
