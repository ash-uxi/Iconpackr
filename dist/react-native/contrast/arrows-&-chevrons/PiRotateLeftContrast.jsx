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
 * Pirotateleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pirotateleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "rotate left icon",
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
    <path d="M4.25 14a8 8 0 1 0 3.302-8.652m0 0A24 24 0 0 1 6.457 3.21l-.242-.54a15 15 0 0 0-1.049 3.727c-.049.335.215.485.479.586a15 15 0 0 0 3.57.884l-.346-.48a24 24 0 0 1-1.317-2.038" />
    <path
      fill={color}
      d="M5.166 6.396A15 15 0 0 1 6.215 2.67l1.237 2.75 1.763 2.446a15 15 0 0 1-3.57-.884c-.264-.101-.528-.251-.479-.586"
      opacity={0.28}
    />
  </Svg>
);

export default Pirotateleftcontrast;
