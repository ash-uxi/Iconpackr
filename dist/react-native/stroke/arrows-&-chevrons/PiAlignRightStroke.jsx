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
 * Pialignrightstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignrightstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align right icon",
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
      d="M11.9691 16C13.4233 14.9414 14.7294 13.7046 15.8551 12.3211C15.9517 12.2025 16 12.0596 16 11.9167M11.9691 7.83333C13.4233 8.89198 14.7294 10.1287 15.8551 11.5122C15.9517 11.6309 16 11.7738 16 11.9167M16 11.9167L4 11.9167M20 19V5"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pialignrightstroke;
