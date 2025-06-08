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
 * Pilogoutleftduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilogoutleftduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "log out left icon",
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
      d="M11 4.52779C12.0615 3.57771 13.4633 3 15 3C18.3137 3 21 5.68629 21 9V15C21 18.3137 18.3137 21 15 21C13.4633 21 12.0615 20.4223 11 19.4722"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M5.81153 9C4.82454 9.74024 3.93322 10.599 3.15739 11.5564C3.05246 11.6859 3 11.843 3 12M5.81153 15C4.82454 14.2598 3.93322 13.401 3.15739 12.4436C3.05246 12.3141 3 12.157 3 12M3 12H16"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilogoutleftduostroke;
