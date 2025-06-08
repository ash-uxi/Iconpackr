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
 * Piequalscancelstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piequalscancelstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "equals cancel icon",
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
      d="M14.3333 9L19 3M14.3333 9H5M14.3333 9L9.66667 15M15 15L19 15M18.9805 9H19M5 21L9.66667 15M9.66667 15H5"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piequalscancelstroke;
