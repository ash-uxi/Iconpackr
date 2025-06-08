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
 * Pibubblechartcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibubblechartcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bubble chart icon",
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
      <path d="M20 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M9 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0M15.5 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </g>
    <path d="M15.5 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0M20 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M9 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
  </Svg>
);

export default Pibubblechartcontrast;
