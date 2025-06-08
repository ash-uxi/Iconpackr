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
 * Pifilterhorizontalduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifilterhorizontalduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "filter horizontal icon",
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
    <path fill={color || "#000"} d="M13 3a4 4 0 0 0 0 8h1a4 4 0 0 0 0-8z" />{" "}
    <path d="M3 7h7m6 10h5M20 7h1M3 17h3" opacity={0.28} />{" "}
    <path fill={color || "#000"} d="M9 13a4 4 0 0 0 0 8h1a4 4 0 0 0 0-8z" />
  </Svg>
);

export default Pifilterhorizontalduosolid;
