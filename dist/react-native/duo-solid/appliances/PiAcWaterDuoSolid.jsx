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
 * Piacwaterduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piacwaterduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ac water icon",
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
    <path d="M18 8h-2m3.8 11.2a2.8 2.8 0 0 1-5.6 0c0-1.546 2.1-4.2 2.8-4.2s2.8 2.654 2.8 4.2" />{" "}
    <path
      fill={color || "#000"}
      d="M4 3a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3z"
      opacity={0.28}
    />
  </Svg>
);

export default Piacwaterduosolid;
