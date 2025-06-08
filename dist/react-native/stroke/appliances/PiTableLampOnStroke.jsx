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
 * Pitablelamponstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitablelamponstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "table lamp on icon",
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
      d="M12 18V12M9 21H15M6 15L5 17M18 15L19 17M20 12L17.2729 4.32998C16.9894 3.53262 16.2347 3 15.3885 3H8.61155C7.76529 3 7.01062 3.53262 6.72712 4.32998L4 12H20ZM16 21V20C16 18.8954 15.1046 18 14 18H10C8.89543 18 8 18.8954 8 20V21H16Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pitablelamponstroke;
