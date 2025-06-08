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
 * Pivideocalldefaultstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivideocalldefaultstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "video call default icon",
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
      d="M17.0011 13.9337C17.0197 14.5002 17.278 15.0335 17.7136 15.3994L18.7136 16.2394C20.0148 17.3324 22 16.4074 22 14.708V9.29197C22 7.59262 20.0148 6.66755 18.7136 7.76056L17.7136 8.60056C17.28 8.96481 17.022 9.49498 17.0013 10.0586M17.0011 13.9337L17 15C17 17.2091 15.2091 19 13 19H6C3.79086 19 2 17.2091 2 15V9C2 6.79086 3.79086 5 6 5H13C15.2091 5 17 6.79086 17 9L17.0013 10.0586M17.0011 13.9337L17.0013 10.0586"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pivideocalldefaultstroke;
