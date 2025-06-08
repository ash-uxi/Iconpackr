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
 * Piloginrightstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piloginrightstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "log in right icon",
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
      d="M10.8115 9C9.82454 9.74024 8.93322 10.599 8.15739 11.5564C8.05246 11.6859 8 11.843 8 12M10.8115 15C9.82454 14.2598 8.93322 13.401 8.15739 12.4436C8.05247 12.3141 8 12.157 8 12M8 12H21M13 4.52779C11.9385 3.57771 10.5367 3 9 3C5.68629 3 3 5.68629 3 9V15C3 18.3137 5.68629 21 9 21C10.5367 21 11.9385 20.4223 13 19.4722"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piloginrightstroke;
