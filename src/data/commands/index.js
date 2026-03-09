import ping from "./ping.js";
import flip from "./flip.js";
import rotate from "./rotate.js";
import resize from "./resize.js";
import recolor from "./recolor.js";
import recolorAnimated from "./recolor_animated.js";
import gradient from "./gradient.js";
import gradientAnimated from "./gradient_animated.js";
import shape from "./shape.js";
import shapeAnimated from "./shape_animated.js";
import spin from "./spin.js";
import twist from "./twist.js";
import zoom from "./zoom.js";
import effect from "./effect.js";
import adjust from "./adjust.js";
import effectAnimated from "./effect_animated.js";
import adjustAnimated from "./adjust_animated.js";

export default [
  // Color
  recolor,
  recolorAnimated,
  gradient,
  gradientAnimated,
  shape,
  shapeAnimated,
  
  // Adjustments & Effects
  effect,
  adjust,
  effectAnimated,
  adjustAnimated,
  
  // Transformations
  flip,
  rotate,
  resize,
  
  // Animations
  spin,
  twist,
  zoom,
  
  // Information
  ping,
  
  // Añade aquí más comandos organizados por categoría
];