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
 * Piplaygroundduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piplaygroundduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "playground icon",
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
    <path d="M2 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2m20-6h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2m-10 0v4m0-4a3 3 0 1 1 0-6m0 6a3 3 0 1 0 0-6m0 0V5" />{" "}
    <path
      fill={color || "#000"}
      d="M5 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z"
      opacity={0.28}
    />
  </Svg>
);

export default Piplaygroundduosolid;
