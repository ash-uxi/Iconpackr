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
 * Pisearchdefaultzoomincontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisearchdefaultzoomincontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "search default zoom in icon",
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
      fill={color}
      d="M17 10a6.98 6.98 0 0 1-2.05 4.95A7 7 0 1 1 17 10"
      opacity={0.28}
    />
    <path d="m21 21-6.05-6.05m0 0a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9M10 13v-3m0 0V7m0 3H7m3 0h3" />
  </Svg>
);

export default Pisearchdefaultzoomincontrast;
