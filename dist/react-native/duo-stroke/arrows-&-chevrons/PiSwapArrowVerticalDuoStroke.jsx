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
 * Piswaparrowverticalduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswaparrowverticalduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swap arrow vertical icon",
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
      d="M12 17.1131C13.037 18.5153 14.2485 19.7748 15.6038 20.8603C15.72 20.9534 15.86 21 16 21C16.14 21 16.28 20.9534 16.3962 20.8603C17.7515 19.7748 18.963 18.5153 20 17.1131M4 6.88693C5.03704 5.48467 6.24852 4.22522 7.60379 3.13968C7.72005 3.04656 7.86002 3 8 3C8.13998 3 8.27995 3.04656 8.39621 3.13968C9.75148 4.22522 10.963 5.48467 12 6.88693"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M16 21L16 7M8 3V17"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piswaparrowverticalduostroke;
