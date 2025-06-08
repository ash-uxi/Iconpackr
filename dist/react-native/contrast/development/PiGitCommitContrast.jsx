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
 * Pigitcommitcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitcommitcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git commit icon",
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
    <path fill={color} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0" opacity={0.28} />
    <path d="M15 12a3 3 0 1 1-6 0m6 0a3 3 0 1 0-6 0m6 0h6M9 12H3" />
  </Svg>
);

export default Pigitcommitcontrast;
