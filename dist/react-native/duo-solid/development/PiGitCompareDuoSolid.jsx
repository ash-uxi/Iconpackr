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
 * Pigitcompareduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitcompareduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git compare icon",
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
    <path fill={color || "#000"} d="M18 14a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />{" "}
    <path d="M18 15v-4a5 5 0 0 0-5-5M6 9v4a5 5 0 0 0 5 5" opacity={0.28} />{" "}
    <path fill={color || "#000"} d="M6 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
  </Svg>
);

export default Pigitcompareduosolid;
