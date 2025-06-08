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
 * Piprioritycriticalstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piprioritycriticalstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "priority critical icon",
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
      d="M11.3066 4.15972C9.25473 5.23358 7.39117 6.45628 5.75069 7.8048C5.26196 8.20655 5 8.77717 5 9.36888L5 20C6.81482 18.3966 8.93491 16.9565 11.3066 15.7153C11.5101 15.6088 11.755 15.5556 12 15.5556C12.245 15.5556 12.4899 15.6088 12.6934 15.7153C15.0651 16.9565 17.1852 18.3966 19 20L19 9.36888C19 8.77717 18.738 8.20655 18.2493 7.8048C16.6088 6.45628 14.7453 5.23358 12.6934 4.15972C12.4899 4.05324 12.245 4 12 4C11.755 4 11.5101 4.05324 11.3066 4.15972Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piprioritycriticalstroke;
