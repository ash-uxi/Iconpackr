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
 * Picybertruckstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picybertruckstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cyber truck icon",
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
      d="M8 15C8 16.1046 7.10457 17 6 17C4.89543 17 4 16.1046 4 15M8 15C8 13.8954 7.10457 13 6 13C4.89543 13 4 13.8954 4 15M8 15H16M4 15H1V12L10 7L22.5 10L22 15H20M20 15C20 16.1046 19.1046 17 18 17C16.8954 17 16 16.1046 16 15M20 15C20 13.8954 19.1046 13 18 13C16.8954 13 16 13.8954 16 15"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picybertruckstroke;
