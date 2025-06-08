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
 * Piearcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piearcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ear icon",
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
      d="M13.526 2.666a6.41 6.41 0 0 1 2.968 12.089c-.685.358-1.028.537-1.135.644-.164.165-.131.115-.218.331-.056.14-.09.595-.16 1.503-.168 2.204-2.008 4.167-4.413 4.167a4.437 4.437 0 0 1-4.405-4.97c.264-2.21.954-5.129.954-7.355a6.41 6.41 0 0 1 6.409-6.409"
      opacity={0.28}
    />
    <path d="M13.526 2.666a6.41 6.41 0 0 1 2.968 12.089c-.685.358-1.028.537-1.135.644-.164.165-.131.115-.218.331-.056.14-.09.595-.16 1.503-.168 2.204-2.008 4.167-4.413 4.167a4.437 4.437 0 0 1-4.405-4.97c.264-2.21.954-5.129.954-7.355a6.41 6.41 0 0 1 6.409-6.409" />
    <path d="M16.531 9.058a2.975 2.975 0 1 0-5.95 0c0 .798-.047 1.552-.182 2.449 2.875.77 2.381 4.196-.37 3.82" />
  </Svg>
);

export default Piearcontrast;
