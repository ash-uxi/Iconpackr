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
 * Picircledashedstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picircledashedstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "circle dashed icon",
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
      d="M10.2623 3.01743C11.4101 2.79367 12.5903 2.79367 13.7381 3.01743M17.1225 4.4169C18.0941 5.07388 18.9296 5.91249 19.583 6.88657M20.9825 10.2618C21.2062 11.4096 21.2062 12.5898 20.9825 13.7376M19.583 17.122C18.926 18.0936 18.0874 18.9291 17.1133 19.5825M13.7381 20.982C12.5903 21.2055 11.4101 21.2055 10.2623 20.982M6.87791 19.5825C5.90626 18.9255 5.07076 18.0869 4.41739 17.1128M3.01791 13.7376C2.79416 12.5898 2.79416 11.4096 3.01791 10.2618M4.41739 6.87742C5.07437 5.90577 5.91298 5.07028 6.88706 4.4169"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picircledashedstroke;
