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
 * Piheadingh1duostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheadingh1duostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "heading h1 icon",
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
      d="M19 18V10C18.0376 10.2357 17.3021 10.8984 16.8657 11.7713M19 18H16.5M19 18H21.5"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M4 12H12M4 18V6M12 18V6"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piheadingh1duostroke;
