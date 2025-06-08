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
 * Piphonecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piphonecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "phone icon",
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
    <path d="M12 19h.01M11.4 2h1.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C19 5.04 19 6.16 19 8.4v7.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C15.96 22 14.84 22 12.6 22h-1.2c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C5 18.96 5 17.84 5 15.6V8.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C8.04 2 9.16 2 11.4 2" />
    <path
      fill={color}
      d="M12.6 2h-1.2c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C5 5.04 5 6.16 5 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C8.04 22 9.16 22 11.4 22h1.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C19 18.96 19 17.84 19 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C15.96 2 14.84 2 12.6 2"
      opacity={0.28}
    />
  </Svg>
);

export default Piphonecontrast;
