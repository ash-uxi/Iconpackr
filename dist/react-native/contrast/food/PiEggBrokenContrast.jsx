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
 * Pieggbrokencontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pieggbrokencontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "egg broken icon",
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
    <path d="M11.657 13.676c-1.309-.442-2.24-1.329-2.937-2.44a.06.06 0 0 1 .003-.069l1.813-2.51a.095.095 0 0 0 .003-.109C9.748 7.38 8.687 6.412 7.446 5.685m0 0C5.72 8.229 4.611 11.748 4.611 14.11a7.389 7.389 0 1 0 14.778 0C19.39 10.031 16.081 2.5 12 2.5c-1.718 0-3.299 1.335-4.554 3.185" />
    <path
      fill={color}
      d="M19.39 14.111a7.389 7.389 0 1 1-14.779 0c0-4.08 3.308-11.611 7.39-11.611 4.08 0 7.388 7.53 7.388 11.611"
      opacity={0.28}
    />
  </Svg>
);

export default Pieggbrokencontrast;
