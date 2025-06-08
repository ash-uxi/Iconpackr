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
 * Picurlybracescodecheckstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picurlybracescodecheckstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "curly braces code check icon",
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
      d="M8 4C6.34315 4 5 5.34315 5 7V9C5 10.6569 3.65685 12 2 12C3.65685 12 5 13.3431 5 15V17C5 18.6569 6.34315 20 8 20M16 4C17.6569 4 19 5.34315 19 7V9C19 10.6569 20.3431 12 22 12C20.3431 12 19 13.3431 19 15V17C19 18.6569 17.6569 20 16 20M9 12.2587L11.0362 14.2927C12.0155 12.5802 13.3709 11.1125 15 10"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picurlybracescodecheckstroke;
