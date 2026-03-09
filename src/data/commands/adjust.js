const adjust = {
  id: "adjust",
  name: "adjust",
  description: "Adjust image properties to an image",
  category: "adjustments_effects",
  usage: "/adjust <property> <intensity> [image]",
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
      name: "image",
      description: "Image to adjust, default: your first uploaded image",
      required: false,
    },
  ],
  instructions: null,
  videoUrl: null,
};

export default adjust;
