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
 * Pivideocallincomingduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivideocallincomingduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "video call incoming icon",
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
      d="M13 19C15.2091 19 17 17.2091 17 15V9C17 6.79086 15.2091 5 13 5H6C3.79086 5 2 6.79086 2 9V15C2 17.2091 3.79086 19 6 19H13Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M17.7135 15.3994C17.2779 15.0335 17.0196 14.5002 17.001 13.9337L17.0012 10.0586C17.0219 9.49493 17.2799 8.96476 17.7135 8.60051L18.7135 7.76051C20.0147 6.6675 21.9999 7.59257 21.9999 9.29192V14.708C21.9999 16.4074 20.0147 17.3324 18.7135 16.2394L17.7135 15.3994Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M6.15076 10.6033C5.97628 11.8247 5.95325 13.0622 6.08166 14.2878C6.09903 14.4535 6.17298 14.6017 6.28402 14.7127M10.3934 14.846C9.17206 15.0204 7.93457 15.0435 6.70897 14.9151C6.54321 14.8977 6.39507 14.8238 6.28402 14.7127M6.28402 14.7127L12 9"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pivideocallincomingduostroke;
