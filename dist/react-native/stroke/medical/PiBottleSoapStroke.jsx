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
 * Pibottlesoapstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibottlesoapstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bottle soap icon",
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
    <path d="M12 5V2" stroke={color} strokeWidth="2" fill="none" />
    <path
      d="M15 8V6C15 5.44772 14.5523 5 14 5H10C9.44772 5 9 5.44772 9 6V8"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M6 11C6 9.34315 7.34315 8 9 8H15C16.6569 8 18 9.34315 18 11V20.5C18 21.3284 17.3284 22 16.5 22H7.5C6.67157 22 6 21.3284 6 20.5V11Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M6 14.4923C11.7518 12.4367 12 17.5862 18 15.9783"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9.5 2H16.4189C17.3631 2 18.2014 2.60421 18.5 3.5"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pibottlesoapstroke;
