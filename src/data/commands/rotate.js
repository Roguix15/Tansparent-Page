const rotate = {
  id: "rotate",
  name: "rotate",
  description: "Rotate an image by the number of degrees you choose",
  category: "transformations",
  usage: "/rotate <degrees> <expand> [background] [image]",
  arguments: [
    {
      name: "degrees",
      description: "Degrees to rotate the image (-360-360)",
      required: true,
    },
    {
      name: "expand",
      description: "Expand frame while rotating?",
      required: true,
    },
    {
      name: "background",
      description: "Background color (HEX) or 'uploaded' for your second uploaded image, default: transparent",
      required: false,
    },
    {
      name: "image",
      description: "Image to rotate, default: your first uploaded image",
      required: false,
    },
  ],
  instructions: null,
  videoUrl: null,
};

export default rotate;
