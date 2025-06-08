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
 * Pienvelopearrowdowncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pienvelopearrowdowncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "envelope arrow down icon",
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
      d="M10 4h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 7.8 22 9.2 22 12v.392h-.52A3 3 0 0 0 17 15.002v.62a3.001 3.001 0 0 0-2.377 4.033V20H10c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12s0-4.2.545-5.27A5 5 0 0 1 4.73 4.545C5.8 4 7.2 4 10 4"
      opacity={0.28}
    />
    <path d="M17.428 18.592c.635.846 1.371 1.61 2.192 2.275.11.09.245.135.38.135m2.571-2.41a12.9 12.9 0 0 1-2.19 2.275.6.6 0 0 1-.381.135m0 0v-6M13.686 20H10c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12c0-1.994 0-3.278.197-4.238m19.606 0-5.508 3.505c-1.557.99-2.335 1.486-3.171 1.678a5 5 0 0 1-2.248 0c-.836-.192-1.614-.688-3.171-1.678L2.197 7.762m19.606 0a4 4 0 0 0-.348-1.032 5 5 0 0 0-2.185-2.185C18.2 4 16.8 4 14 4h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 6.73a4 4 0 0 0-.348 1.032m19.606 0c.181.883.196 2.04.197 3.773" />
  </Svg>
);

export default Pienvelopearrowdowncontrast;
