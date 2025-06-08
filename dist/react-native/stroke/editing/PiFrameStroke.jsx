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
 * Piframestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piframestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "frame icon",
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
      d="M7 3V7M7 7V17M7 7L17 7M7 7L3 7M7 17V21M7 17L17 17M7 17H3M21 7L17 7M17 7V3M17 7V17M17 17V21M17 17H21"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piframestroke;
