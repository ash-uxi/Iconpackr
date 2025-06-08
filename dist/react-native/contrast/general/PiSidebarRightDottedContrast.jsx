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
 * Pisidebarrightdottedcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisidebarrightdottedcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "sidebar right dotted icon",
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
    <path d="M15 20.989C14.423 21 13.764 21 13 21h-2c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C3 17.2 3 15.8 3 13v-2c0-2.8 0-4.2.545-5.27A5 5 0 0 1 5.73 3.545C6.8 3 8.2 3 11 3h2c.764 0 1.423 0 2 .011m0 17.978c1.54-.03 2.492-.138 3.27-.534a5 5 0 0 0 2.185-2.185C21 17.2 21 15.8 21 13v-2c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185c-.778-.396-1.73-.504-3.27-.534m0 17.978V20m0-16.989V4m0 4v2m0 4v2" />
    <path
      fill={color}
      d="M21 11v2c0 2.8 0 4.201-.545 5.27a5 5 0 0 1-2.185 2.186c-.778.396-1.73.504-3.27.534V3.012c1.54.03 2.492.137 3.27.534a5 5 0 0 1 2.185 2.185C21 6.8 21 8.2 21 11"
      opacity={0.28}
    />
  </Svg>
);

export default Pisidebarrightdottedcontrast;
