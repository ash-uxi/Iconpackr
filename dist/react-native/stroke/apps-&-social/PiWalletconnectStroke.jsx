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
 * Piwalletconnectstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwalletconnectstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "walletconnect icon",
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
      d="M5.76864 8.84607C7.28028 7.10266 9.51137 6 12 6C14.4886 6 16.7197 7.10266 18.2314 8.84607M2 12.111L7 17.736L12 12.111L17 17.736L22 12.111"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piwalletconnectstroke;
