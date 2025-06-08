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
 * Pikeyboardwiredduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyboardwiredduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "keyboard wired icon",
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
    <path d="M16 15H8M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01" />{" "}
    <path
      fill={color || "#000"}
      d="M16.5 1a1 1 0 1 0-2 0 .5.5 0 0 1-.5.5h-.25A2.75 2.75 0 0 0 11.011 4H8.357C7.273 4 6.4 4 5.691 4.058c-.728.06-1.369.185-1.961.487A5 5 0 0 0 1.545 6.73c-.302.592-.428 1.233-.487 1.961C1 9.4 1 10.273 1 11.357v1.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C6.4 20 7.273 20 8.357 20h7.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C23 14.6 23 13.727 23 12.643v-1.286c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.369-.487-1.961a5 5 0 0 0-2.185-2.185c-.592-.302-1.232-.428-1.961-.487C17.6 4 16.727 4 15.643 4h-2.6a.75.75 0 0 1 .707-.5H14A2.5 2.5 0 0 0 16.5 1"
      opacity={0.28}
    />
  </Svg>
);

export default Pikeyboardwiredduosolid;
