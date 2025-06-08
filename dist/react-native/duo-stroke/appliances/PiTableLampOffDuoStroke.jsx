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
 * Pitablelampoffduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitablelampoffduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "table lamp off icon",
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
      d="M12 18V12M9 21H15M16 21V20C16 18.8954 15.1046 18 14 18H10C8.89543 18 8 18.8954 8 20V21H16Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M6.72712 4.32998C7.01062 3.53262 7.76529 3 8.61155 3H15.3885C16.2347 3 16.9894 3.53262 17.2729 4.32998L20 12H4L6.72712 4.32998Z"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitablelampoffduostroke;
