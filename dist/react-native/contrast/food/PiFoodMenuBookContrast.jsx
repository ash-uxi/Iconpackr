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
 * Pifoodmenubookcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifoodmenubookcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "food menu book icon",
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
      d="M13 2h-2c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 3.545 4.73C3 5.8 3 7.2 3 10v4c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C6.8 22 8.2 22 11 22h2c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C21 18.2 21 16.8 21 14v-4c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C17.2 2 15.8 2 13 2"
      opacity={0.28}
    />
    <path d="M16 12v-1a4 4 0 0 0-4-4m4 5H8m8 0h1m-9 0v-1a4 4 0 0 1 4-4m-4 5H7m5-5V6M2 8h2m-2 8h2m5 0h6m-4 6h2c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C21 18.2 21 16.8 21 14v-4c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C17.2 2 15.8 2 13 2h-2c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 3.545 4.73C3 5.8 3 7.2 3 10v4c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C6.8 22 8.2 22 11 22" />
  </Svg>
);

export default Pifoodmenubookcontrast;
