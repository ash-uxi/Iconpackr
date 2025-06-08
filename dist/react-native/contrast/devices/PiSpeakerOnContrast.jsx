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
 * Pispeakeroncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pispeakeroncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "speaker on icon",
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
    <path d="M12 6.501h.01M10.4 22h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C20 18.96 20 17.84 20 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C16.96 2 15.84 2 13.6 2h-3.2c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C4 5.04 4 6.16 4 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C7.04 22 8.16 22 10.4 22m1.6-3a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0-11.997a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" />
    <path
      fill={color}
      d="M13.6 2h-3.2c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C4 5.04 4 6.16 4 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C7.04 22 8.16 22 10.4 22h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C20 18.96 20 17.84 20 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C16.96 2 15.84 2 13.6 2"
      opacity={0.28}
    />
  </Svg>
);

export default Pispeakeroncontrast;
