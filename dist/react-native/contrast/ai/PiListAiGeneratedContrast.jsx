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
 * Pilistaigeneratedcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistaigeneratedcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list ai generated icon",
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
      d="M18 13c.637 1.617 1.34 2.345 3 3-1.66.655-2.363 1.384-3 3-.637-1.616-1.34-2.345-3-3 1.66-.655 2.363-1.383 3-3"
      opacity={0.28}
    />
    <path d="M4 12h9.5M4 18h6M4 6h16m-6 14h.01M18 13c-.637 1.617-1.34 2.345-3 3 1.66.655 2.363 1.384 3 3 .637-1.616 1.34-2.345 3-3-1.66-.655-2.363-1.383-3-3" />
  </Svg>
);

export default Pilistaigeneratedcontrast;
