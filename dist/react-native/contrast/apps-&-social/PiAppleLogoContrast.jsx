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
 * Piapplelogocontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piapplelogocontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "apple logo icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M19.161 10.199a4.34 4.34 0 0 0-3.433-1.78c-1.472-.187-2.845.843-3.63.843s-1.864-.842-3.139-.749c-2.256 0-4.807 1.78-4.807 5.338 0 3.84 3.14 8.241 5.101 8.147 1.276 0 1.57-.749 3.041-.749 1.472 0 1.766.75 3.14.75 1.863 0 3.727-2.997 4.414-4.683-3.14-1.592-3.532-5.338-.687-7.117M16.755 2c-3.638 0-4.684 2.093-4.657 4.176 3.112.01 4.681-2.083 4.657-4.176" />
    </g>
    <path d="M16.755 2c-3.638 0-4.684 2.093-4.657 4.176 3.112.01 4.681-2.083 4.657-4.176M19.161 10.199a4.34 4.34 0 0 0-3.433-1.78c-1.472-.187-2.845.844-3.63.844s-1.864-.843-3.139-.75c-2.256 0-4.807 1.78-4.807 5.338 0 3.84 3.14 8.241 5.101 8.148 1.276 0 1.57-.75 3.041-.75 1.472 0 1.766.75 3.14.75 1.863 0 3.727-2.997 4.414-4.683-3.14-1.592-3.532-5.338-.687-7.117" />
  </Svg>
);

export default Piapplelogocontrast;
