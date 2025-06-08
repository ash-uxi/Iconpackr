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
 * Picircledashedcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picircledashedcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "circle dashed icon",
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
    <path d="M10.262 3.017a9.1 9.1 0 0 1 3.476 0m3.384 1.4a9.1 9.1 0 0 1 2.461 2.47m1.4 3.375a9.1 9.1 0 0 1 0 3.476m-1.4 3.384a9.1 9.1 0 0 1-2.47 2.46m-3.375 1.4a9.1 9.1 0 0 1-3.476 0m-3.384-1.4a9.1 9.1 0 0 1-2.46-2.47m-1.4-3.374a9.1 9.1 0 0 1 0-3.476m1.4-3.385a9.1 9.1 0 0 1 2.47-2.46" />
    <path
      fill={color}
      d="M2.85 12a9.15 9.15 0 1 0 18.3 0 9.15 9.15 0 0 0-18.3 0"
      opacity={0.28}
    />
  </Svg>
);

export default Picircledashedcontrast;
