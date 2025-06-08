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
 * Piarrowrightstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowrightstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow right icon",
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
      d="M15.1696 6C17.273 7.55556 19.1622 9.37278 20.7905 11.4057C20.9302 11.5801 21 11.79 21 12M15.1696 18C17.273 16.4444 19.1622 14.6272 20.7905 12.5943C20.9302 12.4199 21 12.21 21 12M21 12H3"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowrightstroke;
