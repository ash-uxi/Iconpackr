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
 * Piamiesoduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piamiesoduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "amie so icon",
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
    <path d="M11 14v-4a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0" />{" "}
    <path
      fill={color || "#000"}
      d="M8.21 2a6.21 6.21 0 0 0-4.92 10A6.21 6.21 0 0 0 12 20.71 6.21 6.21 0 0 0 20.71 12 6.21 6.21 0 0 0 12 3.29 6.2 6.2 0 0 0 8.21 2"
      opacity={0.28}
    />
  </Svg>
);

export default Piamiesoduosolid;
