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
 * Pipriorityhighstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipriorityhighstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "priority high icon",
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
      d="M5.19971 14.25C5.32615 13.9893 5.51125 13.7518 5.75084 13.5548C7.39132 12.2063 9.25488 10.9836 11.3068 9.90972C11.5102 9.80324 11.7552 9.75 12.0001 9.75C12.2451 9.75 12.4901 9.80324 12.6935 9.90972C14.7454 10.9836 16.609 12.2063 18.2495 13.5548C18.4891 13.7518 18.6741 13.9893 18.8006 14.25"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pipriorityhighstroke;
