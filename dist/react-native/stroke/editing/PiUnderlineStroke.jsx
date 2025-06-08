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
 * Piunderlinestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piunderlinestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "underline icon",
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
      d="M17 20H7M17 4V10.6667C17 13.4281 14.7614 15.6667 12 15.6667C9.23858 15.6667 7 13.4281 7 10.6667V4"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piunderlinestroke;
