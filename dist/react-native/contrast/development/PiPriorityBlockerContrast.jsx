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
 * Pipriorityblockercontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipriorityblockercontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "priority blocker icon",
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
      fill={color}
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
      opacity={0.28}
    />
    <path d="m8.5 15.5 7-7M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
  </Svg>
);

export default Pipriorityblockercontrast;
