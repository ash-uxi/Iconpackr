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
 * Pivideocalldefaultduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivideocalldefaultduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "video call default icon",
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
      d="M17.714 15.4A2 2 0 0 1 17 13.933v-3.875a2 2 0 0 1 .712-1.458l1-.84C20.016 6.668 22 7.593 22 9.29v5.417c0 1.7-1.985 2.624-3.286 1.531z"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M6 4a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h7a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5z"
    />
  </Svg>
);

export default Pivideocalldefaultduosolid;
