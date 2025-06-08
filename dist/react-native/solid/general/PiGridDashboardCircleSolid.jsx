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
 * Pigriddashboardcirclesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigriddashboardcirclesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "grid dashboard circle icon",
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
      d="M17.5 13C15.0147 13 13 15.0147 13 17.5C13 19.9853 15.0147 22 17.5 22C19.9853 22 22 19.9853 22 17.5C22 15.0147 19.9853 13 17.5 13Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M17.5 2C15.0147 2 13 4.01472 13 6.5C13 8.98528 15.0147 11 17.5 11C19.9853 11 22 8.98528 22 6.5C22 4.01472 19.9853 2 17.5 2Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M6.5 13C4.01472 13 2 15.0147 2 17.5C2 19.9853 4.01472 22 6.5 22C8.98528 22 11 19.9853 11 17.5C11 15.0147 8.98528 13 6.5 13Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pigriddashboardcirclesolid;
