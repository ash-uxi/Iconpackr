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
 * Pitabletduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitabletduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "tablet icon",
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
    <path d="M10 19h4" />{" "}
    <path
      fill={color || "#000"}
      d="M9.357 1C8.273 1 7.4 1 6.691 1.058c-.728.06-1.369.185-1.96.487A5 5 0 0 0 2.544 3.73c-.302.592-.428 1.233-.487 1.961C2 6.4 2 7.273 2 8.357v7.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C7.4 23 8.273 23 9.357 23h5.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C22 17.6 22 16.727 22 15.643V8.357c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.369-.487-1.961a5 5 0 0 0-2.185-2.185c-.592-.302-1.232-.428-1.961-.487C16.6 1 15.727 1 14.643 1z"
      opacity={0.28}
    />
  </Svg>
);

export default Pitabletduosolid;
