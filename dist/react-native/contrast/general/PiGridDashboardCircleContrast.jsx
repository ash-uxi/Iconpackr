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
 * Pigriddashboardcirclecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigriddashboardcirclecontrast = ({
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
    <g fill={color} opacity={0.28}>
      <path d="M3 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M3 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M14 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M14 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
    </g>
    <path d="M14 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M14 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M3 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M3 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
  </Svg>
);

export default Pigriddashboardcirclecontrast;
