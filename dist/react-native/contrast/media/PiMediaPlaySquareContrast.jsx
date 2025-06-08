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
 * Pimediaplaysquarecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimediaplaysquarecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "media play square icon",
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
    <path d="M13.114 9.89c1.199.692 1.799 1.039 2 1.49.175.395.175.845 0 1.24-.201.451-.801.798-2 1.49l-.257.148c-1.2.693-1.799 1.039-2.29.987-.43-.045-.82-.27-1.074-.62-.29-.4-.29-1.092-.29-2.477v-.296c0-1.385 0-2.077.29-2.478.254-.349.644-.574 1.073-.619.492-.052 1.092.295 2.291.987z" />
    <path d="M4 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C7.04 3 8.16 3 10.4 3h3.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C20 6.04 20 7.16 20 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C16.96 21 15.84 21 13.6 21h-3.2c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C4 17.96 4 16.84 4 14.6z" />
    <rect
      width="16"
      height="18"
      x="4"
      y="3"
      fill={color}
      opacity={0.28}
      rx="4"
    />
  </Svg>
);

export default Pimediaplaysquarecontrast;
