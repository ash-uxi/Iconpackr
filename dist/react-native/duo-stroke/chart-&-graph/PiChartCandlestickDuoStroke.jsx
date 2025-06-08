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
 * Pichartcandlestickduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichartcandlestickduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chart candlestick icon",
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
      d="M12 18H12.5C13.3284 18 14 17.3284 14 16.5V7.5C14 6.67157 13.3284 6 12.5 6H12M12 18H11.5C10.6716 18 10 17.3284 10 16.5V7.5C10 6.67157 10.6716 6 11.5 6H12M12 18V21M12 6V3"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M19 7H19.5C20.3284 7 21 7.67157 21 8.5V12.5C21 13.3284 20.3284 14 19.5 14H19M19 7H18.5C17.6716 7 17 7.67157 17 8.5V12.5C17 13.3284 17.6716 14 18.5 14H19M19 7V4M19 14V17M5 10H5.5C6.32843 10 7 10.6716 7 11.5V15.5C7 16.3284 6.32843 17 5.5 17H5M5 10H4.5C3.67157 10 3 10.6716 3 11.5V15.5C3 16.3284 3.67157 17 4.5 17H5M5 10V7M5 17V20"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pichartcandlestickduostroke;
