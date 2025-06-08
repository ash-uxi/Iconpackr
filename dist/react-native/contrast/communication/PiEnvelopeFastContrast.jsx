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
 * Pienvelopefastcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pienvelopefastcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "envelope fast icon",
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
      d="M14 4h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 6.73c-.299.586.018 1.265.573 1.618l4.587 2.919c1.556.99 2.335 1.486 3.171 1.678.74.171 1.508.171 2.248 0 .836-.192 1.614-.688 3.17-1.678l5.51-3.505a4 4 0 0 0-.349-1.032 5 5 0 0 0-2.185-2.185C18.2 4 16.8 4 14 4"
      opacity={0.28}
    />
    <path d="M4 20h10c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C22 16.2 22 14.8 22 12c0-1.994 0-3.278-.197-4.238m0 0-5.508 3.505c-1.557.99-2.335 1.486-3.171 1.678a5 5 0 0 1-2.248 0c-.836-.192-1.614-.688-3.171-1.678l-4.587-2.92c-.555-.352-.872-1.031-.573-1.617A5 5 0 0 1 4.73 4.545C5.8 4 7.2 4 10 4h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185c.157.308.269.643.348 1.032M1 12h1m0 4h5" />
  </Svg>
);

export default Pienvelopefastcontrast;
