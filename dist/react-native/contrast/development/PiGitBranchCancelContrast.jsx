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
 * Pigitbranchcancelcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitbranchcancelcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git branch cancel icon",
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
      <path d="M21 5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9 18.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    </g>
    <path d="M6 15.5V3m0 12.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m9-10a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 0a9 9 0 0 0-9 9m10 6.8 2.4-2.4m0 0 2.4-2.4m-2.4 2.4L16 16.5m2.4 2.4 2.4 2.4" />
  </Svg>
);

export default Pigitbranchcancelcontrast;
