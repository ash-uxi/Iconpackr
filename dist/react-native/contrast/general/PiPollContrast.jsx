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
 * Pipollcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipollcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "poll icon",
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
      <path d="M9 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    </g>
    <path d="M13 7h8M6 7h.01M13 17h8M9 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
  </Svg>
);

export default Pipollcontrast;
