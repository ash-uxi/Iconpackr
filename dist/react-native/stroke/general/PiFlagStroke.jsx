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
 * Piflagstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piflagstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "flag icon",
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
      d="M5 3L5 21M6.4719 13.5167C8.2565 12.9141 10.2137 13.104 11.8491 14.0385C13.4338 14.9441 15.3231 15.1518 17.0666 14.6121L18.376 14.2068C18.747 14.092 19 13.7488 19 13.3604V4.48517C19 3.59568 17.3336 4.41833 16.9549 4.53557C15.2894 5.05107 13.4824 4.8202 12 3.90255C10.5176 2.98491 8.71058 2.75404 7.04513 3.26954L5.59885 3.71719C5.24278 3.82741 5 4.15669 5 4.52944V13.4561C5 14.2118 6.13797 13.6294 6.4719 13.5167Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piflagstroke;
