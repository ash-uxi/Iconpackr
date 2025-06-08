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
 * Pilistmusicnotestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistmusicnotestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list music note icon",
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
      d="M4 12H10M4 18H10M4 6H20M17 17.5009C17 18.3298 16.3284 19.0017 15.5 19.0017C14.6716 19.0017 14 18.3298 14 17.5009C14 16.672 14.6716 16 15.5 16C16.3284 16 17 16.672 17 17.5009ZM17 17.5009V10.8216C17 10.2116 17.6415 9.8149 18.1868 10.0877C19.298 10.6436 20 11.7801 20 13.0232C20 13.5376 19.8944 14.0411 19.6875 14.5"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilistmusicnotestroke;
