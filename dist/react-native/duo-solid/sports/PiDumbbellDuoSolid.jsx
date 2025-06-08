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
 * Pidumbbellduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidumbbellduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "dumbbell icon",
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
      d="M14 7a3 3 0 1 1 6 0v8a3 3 0 1 1-6 0zM4 7a3 3 0 0 1 6 0v8a3 3 0 1 1-6 0z"
    />{" "}
    <path
      d="M9 11h6M5 9H4a2 2 0 1 0 0 4h1m14 0h1a2 2 0 1 0 0-4h-1"
      opacity={0.28}
    />
  </Svg>
);

export default Pidumbbellduosolid;
