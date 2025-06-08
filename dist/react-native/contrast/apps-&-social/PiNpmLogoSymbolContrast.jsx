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
 * Pinpmlogosymbolcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinpmlogosymbolcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "npm logo symbol icon",
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
      d="M10.4 20h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C20 16.96 20 15.84 20 13.6v-3.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C16.96 4 15.84 4 13.6 4h-3.2c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C4 7.04 4 8.16 4 10.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C7.04 20 8.16 20 10.4 20"
      opacity={0.28}
    />
    <path d="M14 11v9m0 0h-3.6c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C4 16.96 4 15.84 4 13.6v-3.2c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C7.04 4 8.16 4 10.4 4h3.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C20 7.04 20 8.16 20 10.4v3.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748c-.803.41-1.84.434-3.816.436" />
  </Svg>
);

export default Pinpmlogosymbolcontrast;
