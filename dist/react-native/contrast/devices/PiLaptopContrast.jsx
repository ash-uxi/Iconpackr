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
 * Pilaptopcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilaptopcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "laptop icon",
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
    <path d="M21 16V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8V16m18 0H3m18 0a1 1 0 0 1 1 1 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1" />
    <path
      fill={color}
      d="M22 17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1h18a1 1 0 0 1 1 1"
      opacity={0.28}
    />
  </Svg>
);

export default Pilaptopcontrast;
