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
 * Piipadcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piipadcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ipad icon",
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
    <path d="M10 19h4m0-17v1h-4V2m-.6 20h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 18.96 21 17.84 21 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 2 16.84 2 14.6 2H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 5.04 3 6.16 3 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 22 7.16 22 9.4 22" />
    <path
      fill={color}
      d="M14.6 2H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 5.04 3 6.16 3 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 22 7.16 22 9.4 22h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 18.96 21 17.84 21 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 2 16.84 2 14.6 2"
      opacity={0.28}
    />
  </Svg>
);

export default Piipadcontrast;
