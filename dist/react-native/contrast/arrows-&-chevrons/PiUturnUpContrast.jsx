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
 * Piuturnupcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuturnupcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "uturn up icon",
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
    <path d="M16 7.795V15a5 5 0 0 1-10 0v-3m10-4.205q.883 0 1.764.065l2.32.17a20.8 20.8 0 0 0-3.68-3.885.64.64 0 0 0-.809 0 20.8 20.8 0 0 0-3.678 3.886l2.32-.171A24 24 0 0 1 16 7.795" />
    <path
      fill={color}
      d="M16.404 4.145a20.8 20.8 0 0 1 3.68 3.886l-2.32-.171a24 24 0 0 0-3.528 0l-2.32.17a20.8 20.8 0 0 1 3.68-3.885.64.64 0 0 1 .808 0"
      opacity={0.28}
    />
  </Svg>
);

export default Piuturnupcontrast;
