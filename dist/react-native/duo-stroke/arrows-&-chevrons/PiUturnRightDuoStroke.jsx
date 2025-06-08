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
 * Piuturnrightduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuturnrightduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "uturn right icon",
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
      d="M15.969 3.91602C17.4232 4.97466 18.7293 6.21138 19.855 7.59488C19.9516 7.71356 19.9999 7.85646 19.9999 7.99935C19.9999 8.14224 19.9516 8.28513 19.855 8.40382C18.7293 9.78732 17.4232 11.024 15.969 12.0827"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 8H9C6.23858 8 4 10.2386 4 13C4 15.7614 6.23858 18 9 18H12"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piuturnrightduostroke;
