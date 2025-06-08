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
 * Piloginleftduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piloginleftduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "log in left icon",
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
      d="M13.1885 9C14.1755 9.74024 15.0668 10.599 15.8426 11.5564C15.9475 11.6859 16 11.843 16 12M13.1885 15C14.1755 14.2598 15.0668 13.401 15.8426 12.4436C15.9475 12.3141 16 12.157 16 12M16 12H3"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piloginleftduostroke;
