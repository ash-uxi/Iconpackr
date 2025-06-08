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
 * Pitrophyduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitrophyduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "trophy icon",
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
      d="M17.2 12.996A5 5 0 0 0 22 8V6.6A1.6 1.6 0 0 0 20.4 5h-2.405M6.005 5H3.6A1.6 1.6 0 0 0 2 6.6V8a5 5 0 0 0 4.8 4.996M8 21h4m0 0h4m-4 0v-5"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M8.5 2c-.458 0-.851 0-1.2.083A3 3 0 0 0 5.083 4.3c-.054.226-.07.448-.078.67Q5 5.23 5 5.585V10a6.998 6.998 0 0 0 7 7 7 7 0 0 0 7-7V5.586q.001-.356-.005-.617a3.3 3.3 0 0 0-.078-.67A3 3 0 0 0 16.7 2.084c-.349-.084-.742-.084-1.2-.083z"
    />
  </Svg>
);

export default Pitrophyduosolid;
