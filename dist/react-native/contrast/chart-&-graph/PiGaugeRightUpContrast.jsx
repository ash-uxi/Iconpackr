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
 * Pigaugerightupcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigaugerightupcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "gauge right up icon",
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
      d="M12 2.85a9.15 9.15 0 1 1 0 18.3 9.15 9.15 0 0 1 0-18.3"
      opacity={0.28}
    />
    <path d="M12 2.85a9.15 9.15 0 1 1 0 18.3 9.15 9.15 0 0 1 0-18.3" />
    <path d="m15.535 8.464-4.108 2.803a.939.939 0 1 0 1.305 1.305z" />
  </Svg>
);

export default Pigaugerightupcontrast;
