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
 * Pialignupcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignupcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align up icon",
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
      fill={color}
      d="M11.596 8.145a20.8 20.8 0 0 0-3.68 3.886c2.718-.22 5.45-.22 8.167 0a20.8 20.8 0 0 0-3.678-3.886.64.64 0 0 0-.81 0"
      opacity={0.28}
    />
    <path d="M12 11.866V20m0-8.134q-2.044 0-4.083.165a20.8 20.8 0 0 1 3.678-3.886.64.64 0 0 1 .81 0 20.8 20.8 0 0 1 3.678 3.886A51 51 0 0 0 12 11.866M5 4h14" />
  </Svg>
);

export default Pialignupcontrast;
