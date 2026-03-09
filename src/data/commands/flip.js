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

export default flip;
