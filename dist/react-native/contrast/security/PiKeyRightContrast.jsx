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
 * Pikeyrightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikeyrightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "key right icon",
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
    <path d="M10 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m0 0h12v3m-4-3v2" />
    <path fill={color} d="M2 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0" opacity={0.28} />
  </Svg>
);

export default Pikeyrightcontrast;
