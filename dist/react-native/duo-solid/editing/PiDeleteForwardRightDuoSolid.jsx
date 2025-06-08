import React from "react";
import Svg, {
  Path,
  Rect,
  Circle,
  Ellipse,
  Line,
  Polygon,
  Polyline,
} from "react-native-svg";

/**
 * Pideleteforwardrightduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pideleteforwardrightduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "delete forward right icon",
  style,
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    accessibilityRole="image"
    accessibilityLabel={accessibilityLabel}
    style={style}
    {...props}
  >
    <path
      fill={color || "#000"}
      d="M16.108 4.093C15.711 3.999 15.322 4 14.843 4H6.96c-.666 0-1.226 0-1.683.037-.48.04-.934.125-1.366.345a3.5 3.5 0 0 0-1.53 1.53c-.22.431-.304.886-.344 1.365C2 7.735 2 8.294 2 8.96v6.08c0 .666 0 1.226.037 1.684.04.478.124.933.344 1.365a3.5 3.5 0 0 0 1.53 1.53c.432.22.887.305 1.366.344C5.734 20 6.294 20 6.96 20h7.883c.48 0 .868 0 1.265-.093a3.7 3.7 0 0 0 .994-.401c.35-.21.607-.458.92-.76l.048-.047a34 34 0 0 0 4.553-5.446C22.88 12.87 23 12.427 23 12s-.119-.87-.377-1.253a34 34 0 0 0-4.553-5.445l-.049-.047c-.312-.303-.57-.552-.919-.76a3.7 3.7 0 0 0-.994-.402"
      opacity={0.28}
    />{" "}
    <path d="m8 15 3-3m0 0 3-3m-3 3L8 9m3 3 3 3" />
  </Svg>
);

export default Pideleteforwardrightduosolid;
