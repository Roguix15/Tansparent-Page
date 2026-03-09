const effect = {
  id: "effect",
  name: "effect",
  description: "Apply a visual effect to an image",
  category: "adjustments_effects",
  usage: "/effect <effect> <intensity> [image]",
  arguments: [
    {
      name: "effect",
      description: "Effect to apply",
      required: true,
    },
    {
      name: "intensity",
      description: "Effect intensity (0-100)",
      required: true,
    },
    {
      name: "image",
      description: "Image to apply the effect, default: your first uploaded image",
      required: false,
    },
  ],
  instructions: null,
  videoUrl: null,
};

export default effect;
