const effectAnimated = {
  id: "effect_animated",
  name: "effect_animated",
  description: "Apply an animated visual effect from the original to the final result",
  category: "adjustments_effects",
  usage: "/effect_animated <effect> <intensity> <mode> <speed> [image]",
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
      name: "mode",
      description: "Animation mode",
      required: true,
    },
    {
      name: "speed",
      description: "Changes per minute (min 2, max 120)",
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

export default effectAnimated;
