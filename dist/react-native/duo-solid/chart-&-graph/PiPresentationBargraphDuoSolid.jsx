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
 * Pipresentationbargraphduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipresentationbargraphduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "presentation bargraph icon",
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
      d="M13 2a1 1 0 1 0-2 0H8.357C7.273 2 6.4 2 5.691 2.058c-.728.06-1.369.185-1.961.487A5 5 0 0 0 1.545 4.73c-.302.592-.428 1.233-.487 1.961C1 7.4 1 8.273 1 9.357v2.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487q.326.026.7.039l-1.285 2.572a1 1 0 1 0 1.788.894L8.618 19h6.764l1.724 3.447a1 1 0 1 0 1.788-.894l-1.286-2.572q.375-.013.7-.039c.73-.06 1.37-.185 1.962-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C23 13.6 23 12.727 23 11.643V9.357c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.369-.487-1.96a5 5 0 0 0-2.185-2.186c-.592-.302-1.232-.428-1.961-.487C17.6 2 16.727 2 15.643 2z"
      opacity={0.28}
    />{" "}
    <path d="M7 14v-2m5 2V7m5 7v-4" />
  </Svg>
);

export default Pipresentationbargraphduosolid;
