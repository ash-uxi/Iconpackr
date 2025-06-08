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
 * Pigriddashboard03stroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigriddashboard03stroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "grid dashboard03 icon",
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
      d="M14 14H17.5C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5V14Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M14 6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5C21 8.433 19.433 10 17.5 10H14V6.5Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M3 17.5C3 15.567 4.567 14 6.5 14H10V17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5V10H6.5C4.567 10 3 8.433 3 6.5Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigriddashboard03stroke;
