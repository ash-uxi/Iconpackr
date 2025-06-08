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
 * Piuturnleftduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuturnleftduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "uturn left icon",
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
      d="M4 8H15C17.7614 8 20 10.2386 20 13C20 15.7614 17.7614 18 15 18H12"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M8.03089 3.91602C6.57669 4.97466 5.2706 6.21138 4.14485 7.59488C4.04828 7.71356 4 7.85646 4 7.99935C4 8.14224 4.04828 8.28513 4.14485 8.40382C5.2706 9.78732 6.57669 11.024 8.03089 12.0827"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piuturnleftduostroke;
