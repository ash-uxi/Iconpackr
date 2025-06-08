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
 * Piarrowbigupleftduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigupleftduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big up left icon",
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
      d="M14.8088 4.90918C13.7591 5.74073 12.7379 6.60617 11.7467 7.50398L18.7636 14.5208C19.1596 14.9168 19.3576 15.1148 19.4318 15.3432C19.497 15.544 19.497 15.7604 19.4318 15.9612C19.3576 16.1895 19.1596 16.3875 18.7636 16.7835L16.7837 18.7634C16.3877 19.1595 16.1896 19.3575 15.9613 19.4317C15.7605 19.4969 15.5441 19.4969 15.3433 19.4317C15.115 19.3575 14.9169 19.1595 14.5209 18.7634L7.50409 11.7466C6.60629 12.7378 5.74085 13.759 4.9093 14.8087"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M14.8089 4.90963C11.7904 4.45769 8.73278 4.39834 5.71243 4.7321C5.45334 4.76073 5.22251 4.87633 5.0493 5.04954C4.87609 5.22276 4.76049 5.45358 4.73186 5.71268C4.39809 8.73302 4.45745 11.7906 4.90939 14.8091"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowbigupleftduostroke;
