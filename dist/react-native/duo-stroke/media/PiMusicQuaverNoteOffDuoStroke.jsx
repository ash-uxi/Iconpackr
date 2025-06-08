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
 * Pimusicquavernoteoffduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimusicquavernoteoffduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "music quaver note off icon",
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
      d="M11.9999 18.9983C11.9999 20.6561 10.6567 22 8.9999 22C8.60118 22 8.22063 21.9222 7.87259 21.7809M11.9999 18.9983C11.9999 18.5999 11.9224 18.2197 11.7815 17.8719M11.9999 18.9983V17.6536M11.9999 12V3.64314C11.9999 2.42323 13.283 1.62981 14.3734 2.17536C16.0447 3.01147 17.2531 4.50405 17.7497 6.2502M7.71476 16.2851C7.09095 16.5815 6.58559 17.0869 6.28906 17.7108"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path d="M22 2L2 22" stroke={color || "#000"} strokeWidth="2" fill="none" />
  </Svg>
);

export default Pimusicquavernoteoffduostroke;
