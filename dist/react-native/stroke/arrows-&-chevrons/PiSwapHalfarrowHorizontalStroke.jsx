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
 * Piswaphalfarrowhorizontalstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswaphalfarrowhorizontalstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swap halfarrow horizontal icon",
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
      d="M6.88693 18C5.48467 16.963 4.22522 15.7515 3.13968 14.3962C3.04656 14.28 3 14.14 3 14H18M17.1131 6C18.5153 7.03704 19.7748 8.24852 20.8603 9.60379C20.9534 9.72005 21 9.86002 21 10H6"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piswaphalfarrowhorizontalstroke;
