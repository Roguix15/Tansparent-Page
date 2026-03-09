const adjustAnimated = {
  id: "adjust_animated",
  name: "adjust_animated",
  description: "Animate an image adjustment from original to final result",
  category: "adjustments_effects",
  usage: "/adjust_animated <property> <intensity> <mode> <speed> [image]",
  arguments: [
    {
      name: "property",
      description: "Property to adjust",
      required: true,
    },
    {
      name: "intensity",
      description: "Adjustment intensity (0-100)",
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
      description: "Image to adjust, default: your first uploaded image",
      required: false,
    },
  ],
  instructions: null,
  videoUrl: null,
};

export default adjustAnimated;
