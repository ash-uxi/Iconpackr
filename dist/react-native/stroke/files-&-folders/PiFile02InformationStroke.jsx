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
 * Pifile02informationstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifile02informationstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "file02 information icon",
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
      d="M20 11C20 9.3431 18.6569 8 17 8H16.4C16.0284 8 15.8426 8 15.6871 7.9754C14.8313 7.8398 14.1602 7.1687 14.0246 6.3129C14 6.1574 14 5.9716 14 5.6V5C14 3.3431 12.6569 2 11 2M20 11V10C20 5.5817 16.4183 2 12 2H11M20 11V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.7909 5.79086 2 8 2H11M12 14V17M12 11V11.01"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pifile02informationstroke;
