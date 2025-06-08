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
 * Piswaphalfarrowhorizontalduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswaphalfarrowhorizontalduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swap halfarrow horizontal icon",
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
      fill={color || "#000"}
      d="M16.63 5.124a1 1 0 0 1 1.078.072 21.2 21.2 0 0 1 3.933 3.783c.238.297.359.659.359 1.021a1 1 0 0 1-1 1h-3.656a1 1 0 0 1-1-1q0-.852-.063-1.703l-.165-2.223a1 1 0 0 1 .514-.95"
    />{" "}
    <path d="M17.344 10H6m.656 4H18" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M7.37 18.876a1 1 0 0 1-1.078-.072 21.2 21.2 0 0 1-3.933-3.783A1.63 1.63 0 0 1 2 14a1 1 0 0 1 1-1h3.656a1 1 0 0 1 1 1q0 .852.063 1.703l.165 2.223a1 1 0 0 1-.514.95"
    />
  </Svg>
);

export default Piswaphalfarrowhorizontalduosolid;
