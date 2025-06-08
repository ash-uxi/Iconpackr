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
 * Piswaphalfarrowverticalstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswaphalfarrowverticalstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swap halfarrow vertical icon",
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
      d="M18 17.1131C16.963 18.5153 15.7515 19.7748 14.3962 20.8603C14.28 20.9534 14.14 21 14 21V6M6 6.88693C7.03704 5.48467 8.24852 4.22522 9.60379 3.13968C9.72005 3.04656 9.86002 3 10 3V18"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piswaphalfarrowverticalstroke;
