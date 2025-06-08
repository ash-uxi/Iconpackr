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
 * Picoinbasecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picoinbasecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "coinbase icon",
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
      d="M8.25 12a3.75 3.75 0 0 0 7.118 1.65h5.481a9 9 0 1 1 0-3.3h-5.48A3.75 3.75 0 0 0 8.25 12"
      opacity={0.28}
    />
    <path d="M8.25 12a3.75 3.75 0 0 0 7.118 1.65h5.481a9 9 0 1 1 0-3.3h-5.48A3.75 3.75 0 0 0 8.25 12" />
  </Svg>
);

export default Picoinbasecontrast;
