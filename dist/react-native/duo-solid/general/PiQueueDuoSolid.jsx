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
 * Piqueueduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piqueueduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "queue icon",
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
    <path d="M3 15h18M3 20h18" opacity={0.28} />{" "}
    <path fill={color || "#000"} d="M6 3a4 4 0 1 0 0 8h12a4 4 0 0 0 0-8z" />
  </Svg>
);

export default Piqueueduosolid;
