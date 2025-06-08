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
 * Piphoneduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piphoneduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "phone icon",
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
      d="M11.357 1c-1.084 0-1.958 0-2.666.058-.728.06-1.369.185-1.961.487A5 5 0 0 0 4.545 3.73c-.302.592-.428 1.233-.487 1.961C4 6.4 4 7.273 4 8.357v7.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C9.4 23 10.273 23 11.357 23h1.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C20 17.6 20 16.727 20 15.643V8.357c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.369-.487-1.961a5 5 0 0 0-2.185-2.185c-.592-.302-1.232-.428-1.961-.487C14.6 1 13.727 1 12.643 1z"
      opacity={0.28}
    />{" "}
    <path d="M12 19h.01" />
  </Svg>
);

export default Piphoneduosolid;
