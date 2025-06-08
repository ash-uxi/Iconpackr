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
 * Pithermometeraddcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pithermometeraddcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "thermometer add icon",
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
    <path d="M15 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 0v-7" />
    <path
      fill={color}
      d="M18 5a3 3 0 1 0-6 0v10.354a4 4 0 1 0 6 0z"
      opacity={0.28}
    />
    <path d="M18 5a3 3 0 1 0-6 0v10.354a4 4 0 1 0 6 0zM5 10V7m0 0V4m0 3H2m3 0h3" />
  </Svg>
);

export default Pithermometeraddcontrast;
