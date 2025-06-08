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
 * Pibaselinestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibaselinestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "baseline icon",
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
      d="M6 16L8.98243 7.54967C9.90866 4.92532 10.3718 3.61315 11.0542 3.24688C11.6449 2.92983 12.3551 2.92983 12.9458 3.24688C13.6282 3.61315 14.0913 4.92532 15.0176 7.54967L18 16M8 11H16M17 20L7 20"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibaselinestroke;
