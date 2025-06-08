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
 * Pifilterverticalduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifilterverticalduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "filter vertical icon",
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
    <path d="M17 3v7m0 10v1M7 3v3m0 10v5" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M17 9a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0v-1a4 4 0 0 0-4-4M7 5a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0V9a4 4 0 0 0-4-4"
    />
  </Svg>
);

export default Pifilterverticalduosolid;
