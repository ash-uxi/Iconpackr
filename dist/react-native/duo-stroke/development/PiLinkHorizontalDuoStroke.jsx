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
 * Pilinkhorizontalduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilinkhorizontalduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "link horizontal icon",
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
    <path d="M15 12H9" stroke={color || "#000"} strokeWidth="2" fill="none" />
    <path
      d="M15 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H15M9 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H9"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pilinkhorizontalduostroke;
